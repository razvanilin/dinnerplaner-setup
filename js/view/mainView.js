class MainView {
  constructor(mobileContainer, container, model) {
    this.mobileContainer = mobileContainer;
    this.container = container;
    this.model = model;
  }
  render(dishId) {
    var content = /* template */ `
      <div class="container">
        <div class="row no-gutters">
          <div class="col-sm-12 col-md-3">
            <div id="sideBarView"></div>
          </div>
          <div class="col-sm-12 col-md-9">
            ${dishId ? '<div id="dishDetailView"></div>' : '<div id="dishSearchView"></div>'}  
          </div>      
        </div>
      </div>
    `;
    
    this.container.html(content);

    this.renderMobileBarView(this.mobileContainer);
    this.renderSideBarView();
    if(!dishId) {
      this.renderDishSearchView();
    }else{
      this.renderDishDetailView(dishId);
    }

    // Opening the mobile menu
    $('.mobile-button').click(function () {
      $('body').toggleClass('menu-open');
    })
  }

  renderMobileBarView(container) {
    var mobileBarView = new MobileBarView(this.model);
    container.html(mobileBarView.render());
  }

  renderSideBarView() {
    var element = this.container.find("#sideBarView");
    var sidebarView = new SidebarView(this.model);
    element.html(sidebarView.render());
  }

  renderDishSearchView() {
    var element = this.container.find("#dishSearchView");
    var dishSearchView = new DishSearchView(this.model);
    element.html(dishSearchView.render());
  }

  renderDishDetailView(dishId) {
    var element = this.container.find("#dishDetailView");
    var dishDetailView = new DishDetailView(this.container, this.model, this.model.getDish(dishId));
    element.html(dishDetailView.render());

    dishDetailView.afterRender();
  }
}