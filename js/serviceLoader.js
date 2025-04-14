// Function to request notification permission
function requestNotificationPermission() {
  // Check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
    return; // Exit if not supported
  }

  // Check the current permission status
  switch (Notification.permission) {
    case "granted":
      // Permission already granted
      console.log("Notification permission already granted.");
      break;
    case "denied":
      // Permission was previously denied, don't annoy the user
      console.warn("Notification permission was previously denied.");
      // You might want to guide the user on how to manually enable it in browser settings
      break;
    case "default":
      // Permission not yet asked, request it
      console.log("Requesting notification permission...");
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("Notification permission granted!");
          // Optional: You could maybe show a *client-side* confirmation notification here
          // new Notification("Thanks!", { body: "You'll now receive updates." });
        } else {
          console.warn("Notification permission denied.");
        }
      }).catch(err => {
          console.error("Error requesting notification permission:", err);
      });
      break;
  }
}

// Register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw-generated.js") // Make sure this path is correct!
      .then((registration) => {
        console.log("ServiceWorker registration successful with scope: ", registration.scope);

        // --- Request notification permission AFTER successful registration ---
        requestNotificationPermission();
        // --- End of permission request ---

      })
      .catch((error) => {
        console.log("ServiceWorker registration failed: ", error);
      });
  });
} else {
  console.log("Service workers are not supported.");
}

