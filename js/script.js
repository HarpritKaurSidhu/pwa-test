console.log(window.navigator);
if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/pwa-test/service-worker.js', {
            scope: '/pwa-test/'
        })
        .then(function () {
            console.log('SW ok');
        });
}
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/pwa-test/service-worker.js', {
//             scope: '/pwa-test/'
//         })
//         .then((registration) => {
//             console.log('Success. Scope:', registration.scope);
//         })
//         .catch((error) => {
//             console.log('Failed. Error:', error);
//         });
// }