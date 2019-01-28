var SelectView = function (container, model) {
	var numberOfGuestsInput = container.find(".numberOfGuestsInput");
	var dishContainer = container.find(".dishes");

	var numberOfGuests = model.getNumberOfGuests();
	var dishElements = getDishElements(model);

	numberOfGuestsInput.val(numberOfGuests);
	dishContainer.html(dishElements);
}

var getDishElements = function(model) {
	var elements = [];
	model.getAllDishes().map((dish, index) => {
		elements.push(/* template */`
			<div class="col-sm-6 col-md-4 item-column">
				<a class="item-box" href="detail.html">
					<img src="images/${dish.image}" alt="">
					<div class="label text-center">${dish.name}</div>
				</a>
			</div>
		`);
	});	
	return elements;
}
 
