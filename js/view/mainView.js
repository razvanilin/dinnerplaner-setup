class MainView {
  constructor(mobileContainer, container, model) {
    this.mobileContainer = mobileContainer;
    this.container = container;
    this.model = model;
  }
  render() {
    var mobileBarView = new MobileBarView(this.model);
    var sidebarView = new SidebarView(this.model);
    var dishSearchView = new DishSearchView(this.model);
    var dishDetailView = new DishDetailView(this.model, this.model.getDish(1));

    var content = /* template */ `
      <div class="container">
        <div class="row no-gutters">
          ${sidebarView.render()}
          ${dishSearchView.render()}
          ${false ? dishDetailView.render() : ''}
        </div>
      </div>
    `;
    
    this.mobileContainer.html(mobileBarView.render());
    this.container.html(content);
    
    // Opening the mobile menu
    $('.mobile-button').click(function () {
      $('body').toggleClass('menu-open');
    })
  }
}