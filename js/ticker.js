export function startTicker(selector = '.welcome') {
  const paragraphs =
    document.querySelectorAll(selector);
  if (!paragraphs.length) return; // Exit early if no elements

  let index = 0;

  async function animateLine(el) {
    el.style.opacity = '1';
    el.style.transform = `translateX(-100%)`;
    el.style.visibility = 'visible';

    const containerWidth =
      el.parentElement.offsetWidth;
    const textWidth = el.offsetWidth;
    const distance = containerWidth + textWidth;
    const speed = 150; // px per second
    const duration = (distance / speed) * 1000;

    el.style.transition = `transform ${duration}ms linear, opacity 300ms ease-in`;
    requestAnimationFrame(() => {
      el.style.transform = `translateX(${containerWidth}px)`;
    });

    return new Promise(resolve => {
      setTimeout(() => {
        el.style.opacity = '0';
        el.style.visibility = 'hidden';
        el.style.transition = 'none';
        el.style.transform = 'translateX(-100%)';
        resolve();
      }, duration + 200);
    });
  }

  async function loopText() {
    while (true) {
      const el = paragraphs[index];
      await animateLine(el);
      await new Promise(res => setTimeout(res, 2000));
      index = (index + 1) % paragraphs.length;
    }
  }

  loopText();
}
