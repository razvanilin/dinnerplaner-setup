class DishSearchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.model.dishesObs.addObserver(this);
    }

    renderView() {
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

        this.view.textInput.on("keyup", (e) => {
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
        this.model.setSearchString(this.view.textInput.val());
        this.model.setSearchType(this.view.selectInput.val());

        navigate('select');
    }
}