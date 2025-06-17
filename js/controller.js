import { startTicker } from './ticker.js';
import { addHandlerTicker } from './views/tickerView.js';
function init() {
  addHandlerTicker(startTicker); // controller is subscriber, view is publisher
}
export function initHomeView() {
  const homeSection = document.querySelector('#home');
  if (!homeSection.classList.contains('hidden')) {
    startTicker(); // 👉 control passes into ticker.js
  }
}
init();
// const init = function () {
//   bookmarksView.addHandlerRender(controlBookmarks);
//   recipeView.addHandlerRender(controlRecipes);
//   recipeView.addHandlerUpdateServings(controlServings);
//   recipeView.addHandlerAddBookmark(controlAddBookmark);
//   searchView.addHandlerSearch(controlSearchResults);
//   paginationView.addHandlerClick(controlPagination);
//   addRecipeView.addHandlerUpload(controlAddRecipe);
// };
