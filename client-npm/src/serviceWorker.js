import { Workbox } from 'workbox-window';

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      const wb = new Workbox(`${process.env.PUBLIC_URL}/sw.js`);
      wb.register();

      const swVersion = await wb.messageSW({type: 'GET_VERSION'});
      console.log('Service Worker version:', swVersion);

      // const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
      // navigator.serviceWorker.register(swUrl).then(registration => {
      //   console.log('registration sw: ', registration);
      //   // registration.pushManager.subscribe({userVisibleOnly: true});
      //   navigator.serviceWorker.ready.then(() => {
      //     console.log(
      //       'This web app is being served cache-first by a service ' +
      //       'worker. To learn more, visit https://bit.ly/CRA-PWA'
      //     );
      //   });
      // }).catch(registrationError => console.warn('registration service worker failed: ', registrationError));
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        console.error(error.message);
      });
  }
}
