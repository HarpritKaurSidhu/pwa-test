console.log(window.navigator);
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/pwa-test/service-worker.js', {
            scope: '/pwa-test/'
        })
        .then(function () {
            console.log('SW ok');
        });
}