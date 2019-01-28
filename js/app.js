$(function() {
	var model = new DinnerModel();
	model.addDishToMenu(1);
	model.addDishToMenu(2);

	//var homeView = new HomeView($("#page-content"));
	var mainView = new MainView($("#page-content"), model);
	//homeView.render();
	mainView.render();
});

$('.mobile-button').click(function() {
	$('body').toggleClass('menu-open');
})