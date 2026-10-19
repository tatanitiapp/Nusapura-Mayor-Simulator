package com.example

import android.os.Build
import com.sun.jna.Callback
import com.sun.jna.Library
import com.sun.jna.Native
import com.sun.jna.Pointer

interface AndroidLogCallback : Callback {
  fun callback(messagePtr: Pointer)
}

interface LibLog : Library {
  fun __android_log_set_logger(logger: AndroidLogCallback)
  fun __android_log_logd_logger(messagePtr: Pointer)

  companion object {
    val INSTANCE: LibLog? by lazy {
      try {
        Native.load("log", LibLog::class.java)
      } catch (t: Throwable) {
        null
      }
    }
  }
}

object NativeLogFilter {
  // Hold a strong reference so the JNA callback is never garbage collected
  @Volatile
  private var activeCallback: AndroidLogCallback? = null

  fun install() {
    if (Build.VERSION.SDK_INT < 30 || activeCallback != null) return

    try {
      val libLog = LibLog.INSTANCE ?: return
      val pointerSize = Native.POINTER_SIZE // 8 on 64-bit, 4 on 32-bit
      val tagOffset = if (pointerSize == 8) 16L else 12L
      val msgOffset = if (pointerSize == 8) 40L else 24L

      val callback = object : AndroidLogCallback {
        override fun callback(messagePtr: Pointer) {
          try {
            val tagPtr = messagePtr.getPointer(tagOffset)
            val tag = tagPtr?.getString(0)

            if (tag != null) {
              if (tag.equals("MESA", ignoreCase = true) || tag.contains("MESA", ignoreCase = true)) {
                // Suppress Mesa error logs
                return
              }
              if (tag.contains("chromium", ignoreCase = true)) {
                val msgPtr = messagePtr.getPointer(msgOffset)
                val msg = msgPtr?.getString(0)
                if (msg != null && (
                    msg.contains("simple_file_enumerator", ignoreCase = true) ||
                    msg.contains("simple_index_file", ignoreCase = true) ||
                    msg.contains("HTTP Cache", ignoreCase = true) ||
                    msg.contains("Code Cache", ignoreCase = true) ||
                    msg.contains("page_load_metrics", ignoreCase = true) ||
                    msg.contains("first_paint", ignoreCase = true) ||
                    msg.contains("first_image_paint", ignoreCase = true)
                )) {
                  return
                }
              }
            }

            val msgPtr = messagePtr.getPointer(msgOffset)
            val msg = msgPtr?.getString(0)
            if (msg != null && (
                msg.contains("rendernode", ignoreCase = true) ||
                msg.contains("MESA", ignoreCase = true) ||
                msg.contains("simple_file_enumerator", ignoreCase = true) ||
                msg.contains("simple_index_file", ignoreCase = true) ||
                msg.contains("page_load_metrics", ignoreCase = true) ||
                msg.contains("first_paint", ignoreCase = true) ||
                msg.contains("first_image_paint", ignoreCase = true)
            )) {
              return
            }
          } catch (t: Throwable) {
            // Safe fallback
          }

          try {
            libLog.__android_log_logd_logger(messagePtr)
          } catch (t: Throwable) {
            // Safe fallback
          }
        }
      }

      activeCallback = callback
      libLog.__android_log_set_logger(callback)
    } catch (t: Throwable) {
      // Safe fallback
    }
  }
}
