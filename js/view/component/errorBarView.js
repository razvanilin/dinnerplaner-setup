class ErrorBarView {
  constructor(container, model) {
    this.container = container;
    this.model = model;
  }
  render() {
    this.container.html(/* template */ `
      <div class="alert alert-danger" role="alert">
        We seem to be having some troubles, try refreshing the page or come back later.
      </div>
    `);
  }
}