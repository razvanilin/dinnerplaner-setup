class DishSearchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    renderView() {
        this.view.render();
        this.addEventListeners();
    }

    addEventListeners() {
        this.view.searchBtn.on("click", () => {

            this.model.setSearchString(this.view.textInput.val());
            this.model.setSearchType(this.view.selectInput.val());            
            
            navigate('select');
        });
    }
}