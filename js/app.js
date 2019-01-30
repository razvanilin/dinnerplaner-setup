$(document).ready(function () {
	var model = new DinnerModel();
	
	homeView = new HomeView($("#page-content"));

	var mainView = new MainView($("#page-content"), model);
	mainController = new MainController(mainView, model);

	overviewView = new OverviewView($("#page-content"), model);

	mainController.renderView();
});

function navigate(viewName, dishId) {
	switch (viewName) {
		case 'home':
			homeView.render();
			break;
		case 'select':
			mainController.renderView();
			break;
		case 'select-dish':
			mainController.renderView(dishId);
			break;
		case 'overview':
			this.overviewView.render(false);
			$("#mobile-bar").html();
			break;
		case 'print':
			this.overviewView.render(true);
			break;
	}
}