class DishItemView {
	constructor(dish, model) {
		this.dish = dish;
		this.model = model;
		this.price = 0;
		if (this.model) {
			this.price = this.model.getDishPrice(this.dish) * this.model.getNumberOfGuests();
		}
	}
	
	render() {
		if (this.price) {
			return /* template */ `
				<div class="col-md-4 col-lg-2 item-column">
					<div class="item-box">
						<div class="overflow-hidden">
							<img src="${this.dish.image}" alt="">
						</div>
						<div class="label mh text-center">${this.dish.name}</div>
						<b class="text-orange text-center d-block">${this.price} SEK</b>
						<div class="spacing-small"></div>
					</div>
				</div>
        `
		} else {
			return /* template */ `
				<div class="col-sm-6 col-md-4 item-column">
					<a onClick="navigate('select-dish', ${this.dish.id})" class="item-box">
						<div class="overflow-hidden">
							<img src="${this.dish.image}" alt="">
						</div>
						<div class="label mh text-center">${this.dish.name}</div>
					</a>
				</div>
			`
		}
	}
}