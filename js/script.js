console.log(window.navigator);
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('../service-worker.js',{scope:'/pwa-test/'});
}