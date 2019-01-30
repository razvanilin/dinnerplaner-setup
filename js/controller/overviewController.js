class OverviewController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        this.subHeaderController = null;
    }

    addEventListeners() {
        this.view.toPrintBtn.on("click", () => {
            navigate('print');
        })
    }

    renderView(isPrint) {
        this.view.render(isPrint);
        this.view.afterRender();
        this.addEventListeners();

        this.renderSubHeaderController();
    }

    renderSubHeaderController() {
        var subHeaderView = new SubHeaderOverview(this.view.subHeader, this.model);        
        this.subHeaderController = new SubHeaderController(subHeaderView, this.model)
        this.subHeaderController.renderView();
    }
}