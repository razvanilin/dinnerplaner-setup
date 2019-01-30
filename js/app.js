$(function() {
	var model = new DinnerModel();
	model.addDishToMenu(1);
	model.addDishToMenu(2);

	var mobileBarView = new MobileBarView($("#mobile-bar"), model);

	var homeView = new HomeView($("#page-content"));
	var mainView = new MainView($("#page-content"), model);
	var overviewView = new OverviewView($("#page-content"), model, true);

	overviewView.render();
	mobileBarView.render();
});

$(document).ready(function () {
	$('.mobile-button').click(function () {
		$('body').toggleClass('menu-open');
	})
});