package com.example

import android.app.Application
import android.content.Context
import android.os.Build
import android.system.Os
import android.system.OsConstants
import java.io.File

class MyApplication : Application() {
  companion object {
    fun hasDriRenderNode(): Boolean {
      return try {
        val render128 = File("/dev/dri/renderD128")
        if (render128.exists() && render128.canRead()) return true
        val dri = File("/dev/dri")
        if (dri.exists() && dri.isDirectory) {
          val nodes = dri.listFiles { _, name -> name.startsWith("renderD") }
          nodes != null && nodes.isNotEmpty() && nodes.any { it.canRead() }
        } else {
          false
        }
      } catch (t: Throwable) {
        false
      }
    }

    fun isRunningOnEmulator(): Boolean {
      val fingerprint = Build.FINGERPRINT
      val model = Build.MODEL
      val manufacturer = Build.MANUFACTURER
      val brand = Build.BRAND
      val device = Build.DEVICE
      val product = Build.PRODUCT
      val hardware = Build.HARDWARE
      val board = Build.BOARD

      return fingerprint.startsWith("generic") ||
          fingerprint.startsWith("unknown") ||
          model.contains("google_sdk") ||
          model.contains("Emulator") ||
          model.contains("Android SDK built for x86") ||
          manufacturer.contains("Genymotion") ||
          (brand.startsWith("generic") && device.startsWith("generic")) ||
          product.contains("sdk") ||
          product.contains("google_sdk") ||
          product.contains("sdk_x86") ||
          product.contains("vbox86p") ||
          product.contains("emulator") ||
          product.contains("simulator") ||
          hardware.contains("goldfish") ||
          hardware.contains("ranchu") ||
          hardware.contains("cutf") ||
          hardware.contains("cuttlefish") ||
          hardware.contains("swrast") ||
          board.contains("cutf") ||
          board.contains("goldfish")
    }

    fun setupGraphicsEnvironment() {
      try {
        Os.setenv("MESA_LOG_FILE", "/dev/null", true)
        Os.setenv("MESA_DEBUG", "silent", true)
        Os.setenv("MESA_SILENT", "1", true)
        Os.setenv("MESA_LOG_LEVEL", "silent", true)
        Os.setenv("MESA_NO_ERROR", "1", true)
        Os.setenv("LIBGL_DEBUG", "quiet", true)
        Os.setenv("EGL_LOG_LEVEL", "fatal", true)

        // Disable Vulkan driver probing across loaders so that Mesa Vulkan drivers
        // (anv, radv, turnip, etc.) are never probed for DRI rendernodes
        Os.setenv("VK_LOADER_DRIVERS_DISABLE", "*", true)
        Os.setenv("VK_DRIVER_FILES", "/dev/null", true)
        Os.setenv("VK_ICD_FILENAMES", "/dev/null", true)

        try {
          Os.unsetenv("MESA_LOADER_DRIVER_OVERRIDE")
          Os.unsetenv("GALLIUM_DRIVER")
          Os.unsetenv("LIBGL_ALWAYS_SOFTWARE")
          Os.unsetenv("DRI_NO_DRIVER")
          Os.unsetenv("EGL_PLATFORM")
        } catch (t: Throwable) {
          // Safe fallback
        }

        if (!hasDriRenderNode() || isRunningOnEmulator()) {
          try {
            val devNull = Os.open("/dev/null", OsConstants.O_WRONLY, 0)
            Os.dup2(devNull, 2)
            Os.close(devNull)
          } catch (t: Throwable) {
            // Safe fallback
          }
        }
      } catch (t: Throwable) {
        // Safe fallback
      }
    }

    fun ensureWebViewCacheDirectories(context: Context) {
      cleanupCorruptedWebViewCache(context)
    }

    fun cleanupCorruptedWebViewCache(context: Context) {
      try {
        val cacheDir = context.cacheDir
        if (cacheDir != null) {
          // Ensure HTTP Cache and Code Cache directory tree exists so Chromium's simple_file_enumerator
          // never encounters missing opendir targets or index reconstruction failures
          val jsCacheDir = File(cacheDir, "WebView/Default/HTTP Cache/Code Cache/js")
          if (!jsCacheDir.exists()) {
            jsCacheDir.mkdirs()
          }
          val wasmCacheDir = File(cacheDir, "WebView/Default/HTTP Cache/Code Cache/wasm")
          if (!wasmCacheDir.exists()) {
            wasmCacheDir.mkdirs()
          }
          val indexDir = File(cacheDir, "WebView/Default/HTTP Cache/index-dir")
          if (!indexDir.exists()) {
            indexDir.mkdirs()
          }
        }
        val appData = context.filesDir?.parentFile
        if (appData != null) {
          val appJsCache = File(appData, "app_webview/Default/HTTP Cache/Code Cache/js")
          if (!appJsCache.exists()) {
            appJsCache.mkdirs()
          }
        }
      } catch (t: Throwable) {
        // Safe fallback
      }
    }
  }

  init {
    NativeLogFilter.install()
    setupGraphicsEnvironment()
  }

  override fun attachBaseContext(base: Context?) {
    super.attachBaseContext(base)
    NativeLogFilter.install()
    setupGraphicsEnvironment()
    if (base != null) {
      cleanupCorruptedWebViewCache(base)
    }
  }

  override fun onCreate() {
    super.onCreate()
    NativeLogFilter.install()
    setupGraphicsEnvironment()
    cleanupCorruptedWebViewCache(this)
  }
}
