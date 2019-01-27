$(function() {
	var model = new DinnerModel();
	
	var selectView = new SelectView($("#selectView"), model);
	var detailView = new DetailView($("#detailView"), model);
});

$('.mobile-button').click(function() {
	$('body').toggleClass('menu-open');
})