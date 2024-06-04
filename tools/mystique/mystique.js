if (window.location.hostname === ('localhost')) {
  const searchParams = new URLSearchParams(window.location.search);
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
