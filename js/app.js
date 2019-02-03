$(function () {
	var model = new DinnerModel();
	
	var homeView = new HomeView($("#page-content"));
	homeController = new HomeController(homeView);

	var mainView = new MainView($("#page-content"), model);
	mainController = new MainController(mainView, model);

	var overviewView = new OverviewView($("#page-content"), model);
	overviewController = new OverviewController(overviewView, model);

	mainController.renderView();
});

function navigate(viewName, dishId) {
	switch (viewName) {
		case 'home':
			homeController.renderView();
			break;
		case 'select':
			mainController.renderView();
			break;
		case 'select-dish':
			mainController.renderView(dishId);
			break;
		case 'overview':
			overviewController.renderView(false);
			$("#mobile-bar").html();
			break;
		case 'print':
			overviewController.renderView(true);
			break;
	}
}