class DishDetailController {
    constructor(view, model, dishId) {
        this.view = view;
        this.model = model;
        this.dishId = dishId;
        this.dish = null;

        this.model.singleDishObs.addObserver(this);
        this.model.getDish(dishId);
    }

    update(payload) {
        this.renderView();
    }

    addEventListeners() {
        this.view.addToMenuBtn.on("click", () => {
            this.model.addDishToMenu(this.dish.id);
            navigate('select');
        });

        this.view.backBtn.on("click", () => {
            navigate('select');
        })
    }

    renderView() {
        if (this.model.singleDish && this.model.singleDish.id == this.dishId) {
            this.dish = this.model.singleDish;
            this.view.render();
            this.addEventListeners();
        } else {
            this.view.renderLoading();
        }
    }
}