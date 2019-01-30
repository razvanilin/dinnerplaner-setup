class MainView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
    this.childContainers = {
      mobileBar: null,
      sideBar: null,
      dishDetail: null,
      dishSearch: null,
    }
  }
  render(dishId) {
    var content = /* template */ `
      <div id="mobileBarView"></div>
      <div class="header d-flex align-items-center justify-content-center">
        <h1>Dinner Planner</h1>
      </div>
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

    // Opening the mobile menu
    $('.mobile-button').click(function () {
      $('body').toggleClass('menu-open');
    })
  }

  afterRender() {
    this.childContainers.mobileBar = this.container.find("#mobileBarView");
    this.childContainers.sideBar = this.container.find("#sideBarView");
    this.childContainers.dishSearch = this.container.find("#dishSearchView");
    this.childContainers.dishDetail = this.container.find("#dishDetailView");
  }

  /*

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
  */
}