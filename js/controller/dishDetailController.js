class DishDetailController {
    constructor(view, model, dish) {
        this.view = view;
        this.model = model;
        this.dish = dish;
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
        this.view.render(this.dish);
        this.addEventListeners();
    }
}