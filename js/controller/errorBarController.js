class ErrorBarController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }
    renderView() {
        this.view.render();
    }
}