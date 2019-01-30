class DishDetailView {
	constructor(model, dish) {
		this.model = model;
		this.dish = dish;
	}
	render() {
		return /* template */ `
			<div class="scroll-view full">
				<div class="spacing-small"></div>
				<div class="container">
					<div class="row">
						<div class="col-lg-6 small-padding-box">
							<h1>${this.dish.name}</h1>
							<div class="spacing-x-small"></div>
							<img class="d-block" src="images/${this.dish.image}" alt="" width="300">
							<div class="spacing-x-small"></div>
							<p style="text-transform: capitalize;">${this.dish.type}</p>
							<a onClick="navigate('select')" class="btn btn-light btn-primary-color">Back to search</a>
							<div class="spacing-small d-lg-none"></div>
						</div>
						<div class="col-lg-6 col-md-12">
							<div class="ingredients-color small-padding-box">
								<h3 class="h3-height">Ingredients for ${this.model.getNumberOfGuests()} people</h3>
								<div class="container ingredients-height d-flex flex-column">
									<div class="line"></div>
									${this.renderIngredientItems()}
									<div class="line"></div>
									<div class="row align-items-center gray-border-top total-display">
										<div class="col-8 text-left"></div>
										<div class="col-2 text-right">${this.model.getDishPrice(this.dish.id) * this.model.getNumberOfGuests()}</div>
										<div class="col-2 text-right">SEK</div>
									</div>
								</div>
								<a href="" class="btn btn-light btn-primary-color">
									Add to menu
								</a>
							</div>
						</div>
					</div>

					<div class="spacing-small"></div>
					
					<div class="div-preparation">
						<h1>PREPARATION</h1>
						<p>${this.dish.description}</p>
					</div>
					<div class="spacing-small"></div>
				</div>
			</div>
			`;
	}
	renderIngredientItems() {
		var ingredientItems = '';
		this.dish.ingredients.map((ingredient, index) => {
			ingredientItems = ingredientItems +  /* template */ `
				<div class="row align-items-center">
					<div class="col-3">${ingredient.quantity + ' ' + ingredient.unit}</div>
					<div class="col-5">${ingredient.name}</div>
					<div class="col-2 text-right">${ingredient.price * this.model.getNumberOfGuests()}</div>
					<div class="col-2 text-right">SEK</div>
				</div>
				`;
		});
		return ingredientItems;
	}
}