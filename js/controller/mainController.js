
class MainController{
    constructor(view, model){
        this.view = view;
        this.model = model;
    }


    addEventListeners() {
        // this.view.addToMenuBtn.on("click",
        //     () => this.model.addDishToMenu(this.dish.id));
    }

    renderView(dishId){
        this.view.render(dishId);
    }
}