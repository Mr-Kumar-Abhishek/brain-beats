// Service Worker & Notification Loader for Brain Beats PWA

// Function to display an in-app toast notification
function showInAppToast(message) {
  if (typeof document === "undefined" || document.getElementById("bb-cache-toast")) return;
  const toast = document.createElement("div");
  toast.id = "bb-cache-toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  toast.style.cssText = "position:fixed;bottom:24px;right:24px;z-index:999999;background:#198754;color:#ffffff;padding:14px 22px;border-radius:10px;box-shadow:0 6px 18px rgba(0,0,0,0.28);font-family:system-ui,-apple-system,sans-serif;font-size:14px;font-weight:500;display:flex;align-items:center;gap:12px;animation:bbToastFadeIn 0.35s ease-out;max-width:90vw;";

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="font-size:20px;color:#a3e635;"></i> <span>${message}</span> <button type="button" aria-label="Close" style="background:transparent;border:none;color:#ffffff;font-size:18px;cursor:pointer;margin-left:8px;padding:0;line-height:1;opacity:0.8;">&times;</button>`;

  const closeBtn = toast.querySelector("button");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      toast.remove();
    });
  }

  if (!document.getElementById("bb-toast-style")) {
    const styleTag = document.createElement("style");
    styleTag.id = "bb-toast-style";
    styleTag.textContent = `@keyframes bbToastFadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }`;
    document.head.appendChild(styleTag);
  }

  document.body.appendChild(toast);
  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 500);
    }
  }, 6000);
}

// Function to trigger cached notification (both system Web Notification and in-app Toast)
function triggerCachedNotification() {
  const title = "Brain Beats Ready Offline!";
  const options = {
    body: "All preset and generator pages are cached and ready for offline use.",
    icon: "/img/128x128-mandala-1757304_1280.png",
    badge: "/img/favicon-32x32.png",
    tag: "brain-beats-offline-ready"
  };

  // Show system Web Notification if permission is granted
  if ("Notification" in window && Notification.permission === "granted") {
    if (navigator.serviceWorker && navigator.serviceWorker.ready) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title, options).catch(() => {
          try {
            new Notification(title, options);
          } catch (e) {
            console.log("System notification fallback error:", e);
          }
        });
      });
    } else {
      try {
        new Notification(title, options);
      } catch (e) {
        console.log("System notification direct fallback error:", e);
      }
    }
  }

  // Display in-app visual toast
  if (document.body) {
    showInAppToast("All preset and generator pages are cached and ready for offline use.");
  } else {
    window.addEventListener("DOMContentLoaded", () => {
      showInAppToast("All preset and generator pages are cached and ready for offline use.");
    });
  }
}

// Function to request notification permission gracefully
function requestNotificationPermission(callback) {
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notifications.");
    if (callback) callback("unsupported");
    return;
  }

  switch (Notification.permission) {
    case "granted":
      console.log("Notification permission already granted.");
      if (callback) callback("granted");
      break;
    case "denied":
      console.warn("Notification permission was previously denied.");
      if (callback) callback("denied");
      break;
    case "default":
      console.log("Requesting notification permission...");
      Notification.requestPermission()
        .then((permission) => {
          console.log("Notification permission status:", permission);
          if (callback) callback(permission);
        })
        .catch((err) => {
          console.error("Error requesting notification permission:", err);
          if (callback) callback("denied");
        });
      break;
  }
}

// Register the service worker and wire notification listeners
if ("serviceWorker" in navigator) {
  // Listen for broadcast messages from the active Service Worker
  navigator.serviceWorker.addEventListener("message", (event) => {
    if (event.data && event.data.type === "PRECACHE_COMPLETE") {
      if (!sessionStorage.getItem("bb_cache_notified")) {
        sessionStorage.setItem("bb_cache_notified", "true");
        triggerCachedNotification();
      }
    }
  });

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw-generated.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful with scope: ", registration.scope);

        // Request notification permission
        requestNotificationPermission((permission) => {
          if (permission === "granted") {
            if (registration.active && !sessionStorage.getItem("bb_cache_notified")) {
              sessionStorage.setItem("bb_cache_notified", "true");
              triggerCachedNotification();
            }
          }
        });

        // Listen for new worker installation and activation
        registration.addEventListener("updatefound", () => {
          const installingWorker = registration.installing;
          if (installingWorker) {
            installingWorker.addEventListener("statechange", () => {
              if (installingWorker.state === "installed" || installingWorker.state === "activated") {
                if (!sessionStorage.getItem("bb_cache_notified")) {
                  sessionStorage.setItem("bb_cache_notified", "true");
                  triggerCachedNotification();
                }
              }
            });
          }
        });
      })
      .catch((error) => {
        console.log("ServiceWorker registration failed: ", error);
      });
  });
} else {
  console.log("Service workers are not supported.");
}
