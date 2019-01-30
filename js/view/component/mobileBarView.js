class MobileBarView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.mobileBtn = null;
  }
  render() {
    this.container.html(/* template */ `
      <div class="mobile-bar d-flex d-md-none justify-content-between align-items-center">
        <h2>My dinner</h2>
        <div class="d-flex">
          <span class="text-danger">SEK ${this.model.getTotalMenuPrice() * this.model.getNumberOfGuests()}</span>
          <div class="h-spacing-small"></div>
          <a id="mobile-button" class="mobile-button"><i class="fas fa-bars"></i></a>
        </div>
      </div>
      <div class="mobile-bar-off-set d-md-none"></div>
    `);
    this.afterRender();
  }
  afterRender() {
    this.mobileBtn = this.container.find("#mobile-button");
  }
}