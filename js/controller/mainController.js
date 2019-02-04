class MainController{
    constructor(view, model){
        this.view = view;
        this.model = model;
        this.mobileBarController = null;
        this.sideBarController = null;
        this.dishSearchController = null;
        this.dishDetailController = null;

        this.model.showErrorMessageObs.addObserver(this);
    }
    update(payload) {
        console.log('showErrorBar');
        this.renderErrorBar();
    }
    renderView(dishId){
        this.view.render(dishId);
        this.view.afterRender();
        
        this.renderMobileBar();
        this.renderSideBar();

        if (!dishId) {
            this.renderDishSearch();
        } else {
            this.renderDishDetail(dishId);
        }
    }
    renderErrorBar() {
        var errorBarView = new ErrorBarView(this.view.childContainers.errorBar, this.model);
        this.errorBarController = new ErrorBarController(errorBarView, this.model)
        this.errorBarController.renderView();
    }
    renderMobileBar() {
        var mobileBarView = new MobileBarView(this.view.childContainers.mobileBar, this.model);
        this.mobileBarController = new MobileBarController(mobileBarView, this.model)
        this.mobileBarController.renderView();
    }
    renderSideBar() {
        var sideBarView = new SideBarView(this.view.childContainers.sideBar, this.model);
        this.sideBarController = new SideBarController(sideBarView, this.model)
        this.sideBarController.renderView();
    }
    renderDishSearch() {
        var dishSearchView = new DishSearchView(this.view.childContainers.dishSearch, this.model);
        this.dishSearchController = new DishSearchController(dishSearchView, this.model)
        this.dishSearchController.renderView();
    }
    renderDishDetail(dishId) {
        var dishDetailView = new DishDetailView(this.view.childContainers.dishDetail, this.model);
        this.dishDetailController = new DishDetailController(dishDetailView, this.model, dishId)
        this.dishDetailController.renderView();
    }
}