export default class pageView {
  constructor() {
    this.sections =
      document.querySelectorAll('section');
  }

  showPage(pageId) {
    const targetId = pageId;

    this.sections.forEach(section => {
      const isMatch = section.id === targetId;
      section.classList.toggle('hidden', !isMatch);
    });
  }
}
