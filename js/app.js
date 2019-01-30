$(document).ready(function () {
	var model = new DinnerModel();
	model.addDishToMenu(1);
	model.addDishToMenu(2);
	
	homeView = new HomeView($("#page-content"));
	mainView = new MainView($("#mobile-bar"), $("#page-content"), model);
	overviewView = new OverviewView($("#page-content"), model, true);

	homeView.render();
});

function navigate(viewName, dishId) {
	switch (viewName) {
		case 'home':
			homeView.render();
			break;
		case 'select':
			this.mainView.render();
			break;
	}
}