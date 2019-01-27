var DetailView = function (container, model) {
	var numberOfGuestsInput = container.find(".numberOfGuestsInput");
	var numberOfGuestsSpan = container.find(".numberOfGuestsText");

	numberOfGuestsInput.val(model.getNumberOfGuests());
	numberOfGuestsSpan.html(model.getNumberOfGuests())
}
 
