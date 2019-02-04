class DishDetailView {
	constructor(container, model) {
		this.container = container;
		this.model = model;
		this.addToMenuBtn = null;
		this.backBtn = null;
		this.model.numberOfGuestsObs.addObserver(this);
	}
	
	update(payload) {
		this.renderIngredientItems();
	}

	renderLoading() {
		this.container.html(/* template */ `
			<div class="scroll-view full">
				<div class="spacing-small"></div>
				<div class="container">
					<div class="row">
						<div class="col-md-12 text-center">
							<div class="spinner-border m-5" role="status">
								<span class="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		`);
	}

	render() {
		this.container.html(/* template */ `
			<div class="scroll-view full">
				<div class="spacing-small"></div>
				<div class="container">
					<div class="row">
						<div class="col-lg-5">
							<a id="backBtn" class="btn btn-light btn-primary-color"><i class="fas fa-arrow-left"></i> Back to search</a>
							<div class="spacing-small"></div>
							<h1>${this.model.singleDish.name}</h1>
							<div class="spacing-x-small"></div>
							<img class="d-block" src="${this.model.singleDish.image}" alt="" width="300">
							<div class="spacing-x-small"></div>
							<p style="text-transform: capitalize;">${this.model.singleDish.type}</p>
							<div class="spacing-small d-lg-none"></div>
						</div>
						<div class="col-md-12 col-lg-7">
							<div class="ingredients-color small-padding-box">
								<h3>Ingredients for <span id="numberOfPersons"></span> people</h3>
								<div class="line"></div>
								<div id="ingredientList"></div>
								<div class="line"></div>
								<div class="row align-items-center gray-border-top total-display">
									<div class="col-8 text-left"></div>
									<div id="totalPrice" class="col-2 text-right"></div>
									<div class="col-2 text-right">SEK</div>
								</div>
								<a id="addToMenuBtn" class="btn btn-light btn-primary-color">
									<i class="fas fa-plus"></i> Add to menu
								</a>
							</div>
						</div>
					</div>

					<div class="spacing-small"></div>
					
					<div class="div-preparation">
						<h1>PREPARATION</h1>
						<p>${this.model.singleDish.description}</p>
					</div>
					<div class="spacing-small"></div>
				</div>
			</div>
			`);
		this.afterRender();
	}

	renderIngredientItems() {
		var ingredientItems = '';
		this.model.singleDish.ingredients.map((ingredient, index) => {
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
		this.container.find("#totalPrice").html(this.model.getDishPrice(this.model.singleDish.id) * this.model.getNumberOfGuests());
	}

	afterRender() {
		this.renderIngredientItems();
		this.addToMenuBtn = this.container.find("#addToMenuBtn");
		this.backBtn = this.container.find('#backBtn');
	}
}