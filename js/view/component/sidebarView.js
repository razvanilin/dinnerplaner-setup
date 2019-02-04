class SideBarView {
	constructor(container, model) {
		this.container = container;
		this.model = model;
		this.numberOfGuestInput = null;
		this.confirmBtn = null;

		this.model.numberOfGuestsObs.addObserver(this);
		this.model.menuObs.addObserver(this);
	}
	update(payload) {
		this.renderListedItems();
	}
	render() {
		this.container.html(/* template */ `
			<div class="sidebar border-right full-vh">
				<div class="padding">
					<h2>My dinner</h2>
					<div class="spacing-small"></div>
					<div class="input-group">
						<div class="input-group-prepend">
							<span class="input-group-text" id="basic-addon1">People</span>
						</div>
						<input id="numberOfGuestsInput" type="number" name="numberOfGuests" class="form-control" value="${this.model.getNumberOfGuests()}" min="1">
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
					<button id="confirmBtn" class="btn btn-block btn-lg btn-primary-color" ${!this.model.getFullMenu().length ? 'disabled' : ''}>Confirm Dinner <i class="fas fa-arrow-right"></i></button>
				</div>
			</div>
		`);
		this.afterRender();
	}
	renderListedItems() {
		var listedItems = '';
		this.model.getFullMenu().map((dish, index) => {
			const listItem = new ListItemView(dish.name, this.model.getDishPrice(dish), this.model.getNumberOfGuests());
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