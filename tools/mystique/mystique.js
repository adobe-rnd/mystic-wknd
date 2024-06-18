const MYSTIQUE_PLAYGROUND_EVENT = 'mystique-playground';

const mystique = async ({ detail }) => {
  // const sk = detail.data;
  const script = document.createElement('script');
  script.src = 'http://localhost:4010/assistant.js';
  script.type = 'text/javascript';
  script.async = true;
  document.head.appendChild(script);
};

const sk = document.querySelector('helix-sidekick');
if (sk) {
  sk.addEventListener(`custom:${MYSTIQUE_PLAYGROUND_EVENT}`, mystique);
} else {
  document.addEventListener('sidekick-ready', () => {
    document.querySelector('helix-sidekick')
      .addEventListener(`custom:${MYSTIQUE_PLAYGROUND_EVENT}`, mystique);
  }, { once: true });
}
