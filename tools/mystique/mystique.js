function loadMystique() {
  const url = 'http://localhost:8080/index.js';
  const script = document.createElement('script');
  script.setAttribute('src', url);
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('async', 'true');
  script.crossOrigin = 'anonymous';
  document.head.appendChild(script);
}

if (window.location.hostname === ('localhost')) {
  const searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has('mystique')) {
    loadMystique();
  }
  if (searchParams.has('toggleStyle')) {
    const styleName = searchParams.get('toggleStyle');
    // eslint-disable-next-line no-console
    console.debug(`Loading generated styles: ${styleName}.css`);
    const stylesheet = document.createElement('link');
    stylesheet.id = styleName;
    stylesheet.rel = 'stylesheet';
    stylesheet.href = `/generated/${styleName}.css`;
    document.head.appendChild(stylesheet);
  }
}
