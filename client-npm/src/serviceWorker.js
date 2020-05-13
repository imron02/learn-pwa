import { Workbox } from 'workbox-window';

export async function register() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox(`${process.env.PUBLIC_URL}/sw.js`);

    wb.addEventListener('installed', event => {
      if (event.isUpdate) {
        if (window.confirm(`New app is available!. Click OK to refresh`)) {
          window.location.reload();
        }
      }
    });

    wb.register();

    const swVersion = await wb.messageSW({ type: 'GET_VERSION' });
    console.log('Service Worker version:', swVersion);
    // window.addEventListener('load', async () => {
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
    // });
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
