package com.example

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Bundle
import android.util.Log
import android.view.View
import android.view.ViewGroup
import android.view.WindowManager
import android.webkit.ConsoleMessage
import android.webkit.RenderProcessGoneDetail
import android.webkit.WebChromeClient
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.FrameLayout
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.activity.enableEdgeToEdge
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat

class MainActivity : ComponentActivity() {
  companion object {
    init {
      MyApplication.setupGraphicsEnvironment()
    }
  }

  private var webView: WebView? = null
  private lateinit var rootLayout: FrameLayout

  @SuppressLint("SetJavaScriptEnabled")
  override fun onCreate(savedInstanceState: Bundle?) {
    NativeLogFilter.install()
    MyApplication.setupGraphicsEnvironment()
    MyApplication.cleanupCorruptedWebViewCache(this)

    try {
      window.setFlags(
        WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED,
        WindowManager.LayoutParams.FLAG_HARDWARE_ACCELERATED
      )
    } catch (t: Throwable) {
      // Safe fallback
    }

    super.onCreate(savedInstanceState)
    enableEdgeToEdge()

    onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
      override fun handleOnBackPressed() {
        if (webView?.canGoBack() == true) {
          webView?.goBack()
        } else {
          finish()
        }
      }
    })

    rootLayout = FrameLayout(this).apply {
      layoutParams = ViewGroup.LayoutParams(
        ViewGroup.LayoutParams.MATCH_PARENT,
        ViewGroup.LayoutParams.MATCH_PARENT
      )
      setBackgroundColor(Color.parseColor("#070B14"))
    }

    ViewCompat.setOnApplyWindowInsetsListener(rootLayout) { view, insets ->
      val systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars())
      view.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom)
      insets
    }

    initWebView()
    setContentView(rootLayout)
  }

  @Suppress("DEPRECATION")
  @SuppressLint("SetJavaScriptEnabled")
  private fun initWebView(forceSoftware: Boolean = false) {
    val wv = WebView(this).apply {
      layoutParams = FrameLayout.LayoutParams(
        FrameLayout.LayoutParams.MATCH_PARENT,
        FrameLayout.LayoutParams.MATCH_PARENT
      )
      setBackgroundColor(Color.parseColor("#070B14"))

      if (forceSoftware) {
        setLayerType(View.LAYER_TYPE_SOFTWARE, null)
      } else {
        setLayerType(View.LAYER_TYPE_NONE, null)
      }

      isVerticalScrollBarEnabled = false
      isHorizontalScrollBarEnabled = false
      overScrollMode = View.OVER_SCROLL_NEVER

      settings.apply {
        javaScriptEnabled = true
        domStorageEnabled = true
        allowFileAccess = true
        allowContentAccess = true
        @Suppress("DEPRECATION")
        allowFileAccessFromFileURLs = true
        @Suppress("DEPRECATION")
        allowUniversalAccessFromFileURLs = true
        databaseEnabled = true
        useWideViewPort = false
        loadWithOverviewMode = false
        textZoom = 100
        cacheMode = WebSettings.LOAD_NO_CACHE
        mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        mediaPlaybackRequiresUserGesture = false
      }

      clearCache(true)

      webViewClient = object : WebViewClient() {
        override fun onReceivedError(
          view: WebView?,
          request: WebResourceRequest?,
          error: WebResourceError?
        ) {
          super.onReceivedError(view, request, error)
          Log.w("MayorSimulator", "WebResource error: ${error?.description}")
        }

        override fun onRenderProcessGone(
          view: WebView?,
          detail: RenderProcessGoneDetail?
        ): Boolean {
          Log.w("MayorSimulator", "Render process gone; recreating WebView with software rasterization")
          rootLayout.post {
            try {
              if (view != null) {
                rootLayout.removeView(view)
                view.destroy()
              }
              initWebView(forceSoftware = true)
            } catch (e: Exception) {
              Log.e("MayorSimulator", "Failed to recreate WebView", e)
            }
          }
          return true
        }
      }

      webChromeClient = object : WebChromeClient() {
        override fun onConsoleMessage(consoleMessage: ConsoleMessage?): Boolean {
          Log.d("MayorSimulatorJS", "${consoleMessage?.message()} -- From line ${consoleMessage?.lineNumber()} of ${consoleMessage?.sourceId()}")
          return true
        }
      }

      loadUrl("file:///android_asset/index.html")
    }

    webView = wv
    rootLayout.addView(wv)
  }

  override fun onResume() {
    super.onResume()
    webView?.onResume()
  }

  override fun onPause() {
    webView?.onPause()
    super.onPause()
  }

  override fun onDestroy() {
    webView?.destroy()
    webView = null
    super.onDestroy()
  }
}



