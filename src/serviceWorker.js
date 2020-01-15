let swReg;

export const register = () => {
  if (navigator.serviceWorker) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js").then(register => {
        swReg = register;
      });
    });
  }
};

export const unregister = () => {
  if (navigator.serviceWorker) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
};
