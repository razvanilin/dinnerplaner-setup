class SideBarView {
	constructor(container, model) {
		this.container = container;
		this.model = model;
		this.numberOfGuestInput = null;
		this.confirmBtn = null;

		this.model.numberOfGuestsObs.addObserver(this);
	}
	update(payload) {
		this.renderListedItems();
	}
	render() {
		this.container.html(/* template */ `
			<div class="sidebar border-right full-vh">
				<div class="padding">
					<h2>My dinner</h2>
					<div class="row">
						<div class="col-auto">
							<span>People</span>
						</div>
						<div class="col-6">
							<input id="numberOfGuestsInput" type="number" name="numberOfGuests" value="${this.model.getNumberOfGuests()}" min="1">
						</div>
					</div>
				</div>
				<div class="label d-flex justify-content-between">
					<span>Dish name</span>
					<span>Cost</span>
				</div>
				<div id="list" class="padding no-padding-bottom">
				</div>
				<div class="padding">
					<div class="text-right text-danger">Total <span id="totalPrice"></span> SEK</div>
					<div class="spacing"></div>
					<button id="confirmBtn" class="btn btn-block btn-lg btn-primary-color" ${!this.model.getFullMenu().length ? 'disabled' : ''}>Confirm Dinner</button>
				</div>
			</div>
		`);
		this.afterRender();
	}
	renderListedItems() {
		var listedItems = '';
		this.model.getFullMenu().map((dish, index) => {
			const listItem = new ListItemView(dish.name, this.model.getDishPrice(dish.id), this.model.getNumberOfGuests());
			listedItems = listedItems + listItem.render();
		});
		listedItems = listedItems === '' ? 'No added dishes' : listedItems;
		this.container.find('#list').html(listedItems);
		this.container.find('#totalPrice').html(this.model.getTotalMenuPrice() * this.model.getNumberOfGuests())
	}
	afterRender() {
		this.renderListedItems();
		this.numberOfGuestInput = this.container.find("#numberOfGuestsInput");
		this.confirmBtn = this.container.find("#confirmBtn");
	}
}