(() => {
  const GENVAR_EVENT = 'genvar-poc';

  const genvar = async ({ detail }) => {
    // const sk = detail.data;
    const script = document.createElement('script');
    script.src = 'http://localhost:4081/';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);
  };

  const sk = document.querySelector('helix-sidekick');
  if (sk) {
    sk.addEventListener(`custom:${GENVAR_EVENT}`, genvar);
  } else {
    document.addEventListener('sidekick-ready', () => {
      document.querySelector('helix-sidekick')
        .addEventListener(`custom:${GENVAR_EVENT}`, genvar);
    }, { once: true });
  }
})();
