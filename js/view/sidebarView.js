class SidebarView {
	constructor(model) {
		this.model = model;
	}
	render() {
		return /* template */ `
			<div class="col-sm-12 col-md-3 d-none d-md-block">
				<div class="border-right full-vh">
					<div class="padding">
						<h2>My dinner</h2>
						<div class="d-flex align-items-center">
							People
							<div class="h-spacing-small"></div>
							<input class="numberOfGuestsInput" type="number" name="numberOfGuests" value="">
						</div>
					</div>
					<div class="label d-flex justify-content-between">
						<span>Dish name</span>
						<span>Cost</span>
					</div>
					<div class="padding no-padding-bottom">
						${this.renderListedItems()}
					</div>
					<div class="padding">
						<div class="text-right text-danger">SEK 0.00</div>
						<div class="spacing"></div>
						<button class="btn btn-block btn-lg btn-primary-color">Confirm Dinner</button>
					</div>
				</div>
			</div>
		`;
	}
	renderListedItems() {
		var listedItems = '';
		this.model.getFullMenu().map((dish, index) => {
			const listItem = new ListItemView(dish.name, dish.price);
			listedItems = listedItems + listItem.render();
		});
		return listedItems;
	}
}