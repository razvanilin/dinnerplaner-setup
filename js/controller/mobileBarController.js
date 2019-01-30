class MobileBarController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }
    renderView() {
        this.view.render();
        this.addEventListeners();
    }
    addEventListeners() {
        this.view.mobileBtn.on("click", () => {
            $('body').toggleClass('menu-open');
        });
    }
}