if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
   navigator.serviceWorker.register('/sw-generated.js').then( () => {
    console.log('Service Worker Registered')
   })
 })
}
