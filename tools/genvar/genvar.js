const EVENT_NAME = 'mystique-playground';

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
  sk.addEventListener(`custom:${EVENT_NAME}`, genvar);
} else {
  document.addEventListener('sidekick-ready', () => {
    document.querySelector('helix-sidekick')
      .addEventListener(`custom:${EVENT_NAME}`, genvar);
  }, { once: true });
}
