class DishSearchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.model.dishesObs.addObserver(this);
    }

    renderView() {
        console.log("when rendering the view", this.model.getSearchString());
        this.view.render();
        this.addEventListeners();
    }

    update(payload) {
        this.addEventListenersAfterData();
    }

    addEventListeners() {
        this.view.searchBtn.on("click", () => {
            this.search();
        });

        this.view.dishSearchInput.on("keyup", (e) => {
            e.preventDefault();

            if (e.keyCode == 13) {
                this.search();
            }
        })
    }

    addEventListenersAfterData() {
        this.view.showMoreBtn.on("click", () => {
            this.model.getMoreDishes();
        })
    }

    search() {
        this.model.setSearchString(this.view.dishSearchInput.val());
        this.model.setSearchType(this.view.selectInput.val());

        navigate('select');
    }
}
