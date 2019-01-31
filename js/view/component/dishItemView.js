class DishItemView {
	constructor(dish, model) {
		this.dish = dish;
		this.model = model;
		this.price = 0;
		if (this.model) {
			this.price = this.model.getDishPrice(this.dish.id) * this.model.getNumberOfGuests();
		}
	}
	
	render() {
		if (this.price) {
			return /* template */ `
				<div class="col-md-4 col-lg-2 item-column">
					<div class="item-box">
						<img src="images/${this.dish.image}" alt="">
						<div class="label text-center">${this.dish.name}</div>
						<div class="spacing-x-small"></div>
						<b class="text-danger text-center text-lg-right d-block">${this.price} SEK</b>
					</div>
				</div>
        `
		} else {
			return /* template */ `
				<div class="col-sm-6 col-md-4 item-column">
					<a onClick="navigate('select-dish', ${this.dish.id})" class="item-box">
						<img src="images/${this.dish.image}" alt="">
						<div class="label text-center">${this.dish.name}</div>
					</a>
				</div>
			`
		}
	}
}