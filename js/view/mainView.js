class MainView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }
  render() {
    var sidebarView = new SidebarView(this.model);
    var dishSearchView = new DishSearchView(this.model);

    var content = /* template */ `
      <div class="container">
        <div class="row no-gutters">
          ${sidebarView.render()}
          ${dishSearchView.render()}
        </div>
      </div>
    `;
    this.container.html(content);
  }
}