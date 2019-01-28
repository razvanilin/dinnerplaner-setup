$(function() {
	var model = new DinnerModel();
	//var homeView = new HomeView($("#page-content"));
	var mainView = new MainView($("#page-content"), model);
	var overviewView = new OverviewView($("#page-content"), model);

	model.addDishToMenu(1);

	model.addDishToMenu(101);
	

	overviewView.render();


	//var selectView = new SelectView($("#selectView"), model);
	//var detailView = new DetailView($("#detailView"), model);
});

$('.mobile-button').click(function() {
	$('body').toggleClass('menu-open');
})