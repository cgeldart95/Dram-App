import PageView from './views/view.js';

const pageView = new PageView();

function handleHashChange() {
  const page =
    window.location.hash.slice(1) || 'home-view'; // e.g. 'search-results'
  pageView.showPage(page);
}

window.addEventListener(
  'hashchange',
  handleHashChange
);
