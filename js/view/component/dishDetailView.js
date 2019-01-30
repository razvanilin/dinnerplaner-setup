class DishDetailView {
	constructor(container, model, dish) {
		this.container = container;
		this.model = model;
		this.dish = dish;
		this.addToMenuBtn = null;
		this.backBtn = null;

		this.model.numberOfGuestsObs.addObserver(this);
	}
	update(payload) {
		this.renderIngredientItems();
	}
	render(dish) {
		this.container.html(/* template */ `
			<div class="scroll-view full">
				<div class="spacing-small"></div>
				<div class="container">
					<div class="row">
						<div class="col-lg-6 small-padding-box">
							<h1>${dish.name}</h1>
							<div class="spacing-x-small"></div>
							<img class="d-block" src="images/${dish.image}" alt="" width="300">
							<div class="spacing-x-small"></div>
							<p style="text-transform: capitalize;">${dish.type}</p>
							<a id="backBtn" class="btn btn-light btn-primary-color">Back to search</a>
							<div class="spacing-small d-lg-none"></div>
						</div>
						<div class="col-lg-6 col-md-12">
							<div class="ingredients-color small-padding-box">
								<h3 class="h3-height">Ingredients for <span id="numberOfPersons"></span> people</h3>
								<div class="container ingredients-height d-flex flex-column">
									<div class="line"></div>
									<div id="ingredientList"></div>
									<div class="line"></div>
									<div class="row align-items-center gray-border-top total-display">
										<div class="col-8 text-left"></div>
										<div id="totalPrice" class="col-2 text-right"></div>
										<div class="col-2 text-right">SEK</div>
									</div>
								</div>
								<a id="addToMenuBtn" class="btn btn-light btn-primary-color">
									Add to menu
								</a>
							</div>
						</div>
					</div>

					<div class="spacing-small"></div>
					
					<div class="div-preparation">
						<h1>PREPARATION</h1>
						<p>${dish.description}</p>
					</div>
					<div class="spacing-small"></div>
				</div>
			</div>
			`);
		this.afterRender();
	}
	renderIngredientItems() {
		console.log(this.dish);
		var ingredientItems = '';
		this.dish.ingredients.map((ingredient, index) => {
			ingredientItems = ingredientItems +  /* template */ `
				<div class="row align-items-center">
					<div class="col-3">${ingredient.quantity * this.model.getNumberOfGuests() + ' ' + ingredient.unit}</div>
					<div class="col-5">${ingredient.name}</div>
					<div class="col-2 text-right">${ingredient.price * this.model.getNumberOfGuests()}</div>
					<div class="col-2 text-right">SEK</div>
				</div>
				`;
		});
		
		this.container.find("#ingredientList").html(ingredientItems);
		this.container.find("#numberOfPersons").html(this.model.getNumberOfGuests());
		this.container.find("#totalPrice").html(this.model.getDishPrice(this.dish.id) * this.model.getNumberOfGuests());
	}

	afterRender() {
		this.renderIngredientItems();
		this.addToMenuBtn = this.container.find("#addToMenuBtn");
		this.backBtn = this.container.find('#backBtn');
	}
}