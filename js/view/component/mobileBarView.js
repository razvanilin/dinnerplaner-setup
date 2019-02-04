class MobileBarView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.mobileBtn = null;

    this.model.numberOfGuestsObs.addObserver(this);
  }
  update(payload) {
    this.updateDynamicContent();
  }
  render() {
    this.container.html(/* template */ `
      <div class="mobile-bar d-flex d-md-none justify-content-between align-items-center">
        <h2>My dinner</h2>
        <div class="d-flex">
          <span class="text-danger" id="totalPrice"></span>
          <div class="h-spacing-small"></div>
          <a id="mobile-button" class="mobile-button"><i class="fas fa-bars"></i></a>
        </div>
      </div>
      <div class="mobile-bar-off-set d-md-none"></div>
    `);
    this.afterRender();
  }
  updateDynamicContent() {
    this.container.find("#totalPrice").html('SEK ' + this.model.getTotalMenuPrice());
  }
  afterRender() {
    this.updateDynamicContent();
    this.mobileBtn = this.container.find("#mobile-button");
  }
}