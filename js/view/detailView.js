var DetailView = function (container, model) {
	var numberOfGuests = container.find(".numberOfGuests");
	numberOfGuests.val(model.getNumberOfGuests());
}
 
