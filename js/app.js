$(document).ready(function () {
	var model = new DinnerModel();
	model.addDishToMenu(1);
	model.addDishToMenu(2);
	
	homeView = new HomeView($("#page-content"));
	mainView = new MainView($("#mobile-bar"), $("#page-content"), model);
	overviewView = new OverviewView($("#page-content"), model);

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
		case 'select-dish':
			this.mainView.render(dishId);
			break;
		case 'overview':
			this.overviewView.render(false);
			break;
		case 'print':
			this.overviewView.render(true);
			break;
	}
}