$(function() {
	var model = new DinnerModel();
	//var homeView = new HomeView($("#page-content"));
	var mainView = new MainView($("#page-content"), model);

	mainView.render();


	//var selectView = new SelectView($("#selectView"), model);
	//var detailView = new DetailView($("#detailView"), model);
});

$('.mobile-button').click(function() {
	$('body').toggleClass('menu-open');
})