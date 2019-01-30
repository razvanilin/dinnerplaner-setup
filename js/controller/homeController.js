class HomeController {

    constructor(view) {
        this.view = view;
    }

    addEventListeners() {
        this.view.startBtn.on("click", () => {
            navigate('select');
        })
    }

    renderView() {
        this.view.render();
        this.addEventListeners();
    }
}