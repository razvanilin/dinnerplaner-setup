class MainView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }
  render() {

    var content = /* template */ `
      <div class="container">
        <div class="row no-gutters">
          <div class="col-sm-12 col-md-3">
            <div id="sideBarView"></div>
          </div>
          <div class="col-sm-12 col-md-9">
            ${false ? '<div id="dishDetailView"></div>' : '<div id="dishSearchView"></div>'}  
          </div>      
        </div>
      </div>
    `;
    this.container.html(content);
    this.renderSideBarView();
    this.renderDishSearchView();
    this.renderDishDetailView();
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

  renderDishDetailView() {
    var element = this.container.find("#dishDetailView");
    var dishDetailView = new DishDetailView(this.model, this.model.getDish(1));
    element.html(dishDetailView.render());
  }
}