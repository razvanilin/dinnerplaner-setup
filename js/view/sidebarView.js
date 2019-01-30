class SidebarView {
	constructor(model) {
		this.model = model;
	}
	render() {
		return /* template */ `
			<div class="col-sm-12 col-md-3">
				<div class="sidebar border-right full-vh">
					<div class="padding">
						<h2>My dinner</h2>
						<div class="row">
							<div class="col-auto">
								<span>People</span>
							</div>
							<div class="col-6">
								<input class="numberOfGuestsInput" type="number" name="numberOfGuests" value="${this.model.getNumberOfGuests()}">
							</div>
						</div>
					</div>
					<div class="label d-flex justify-content-between">
						<span>Dish name</span>
						<span>Cost</span>
					</div>
					<div class="padding no-padding-bottom">
						${this.renderListedItems() ? this.renderListedItems() : 'No added dishes'}
					</div>
					<div class="padding">
						<div class="text-right text-danger">Total ${this.model.getTotalMenuPrice() * this.model.getNumberOfGuests()} SEK</div>
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
			const listItem = new ListItemView(dish.name, this.model.getDishPrice(dish.id), this.model.getNumberOfGuests());
			listedItems = listedItems + listItem.render();
		});
		return listedItems;
	}
}