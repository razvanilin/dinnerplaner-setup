class DishDetailView {
	constructor(container, model) {
		this.container = container;
		this.model = model;
		this.addToMenuBtn = null;
		this.backBtn = null;
		this.model.numberOfGuestsObs.addObserver(this);
	}

	update(payload) {
		if (!this.model.showErrorMessage) {
			this.renderIngredientItems();
		} else {
			this.renderError();
		}
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
							<img class="d-block" src="${this.model.singleDish.image}">
							<div class="spacing-x-small"></div>
							<p style="text-transform: capitalize;">${this.model.singleDish.type}</p>
							<div class="spacing-small d-lg-none"></div>
						</div>
						<div class="col-md-12 col-lg-7">
							<div class="ingredients-color small-padding-box">
								<h3>Ingredients for <span id="numberOfPersons"></span> people</h3>
								<div class="spacing-x-small"></div>
								<div class="line"></div>
								<div class="spacing-x-small"></div>
								<div id="ingredientList"></div>
								<div class="line"></div>
								<div class="spacing-x-small"></div>
								<div class="row align-items-center gray-border-top total-display justify-content-between">
									<div id="totalPrice" class="col-auto"></div>
									<div class="col-auto">
										<div class="spacing-small d-sm-none"></div>
										<a id="addToMenuBtn" class="btn btn-light btn-primary-color">
											<i class="fas fa-plus"></i> Add to menu
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="spacing-small"></div>
					
					<div class="div-preparation">
						<h1>Preparation</h1>
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
					<div class="col-5 col-sm-4">${round(ingredient.quantity * this.model.getNumberOfGuests(), 1) + ' ' + ingredient.unit}</div>
					<div class="col-7 col-sm-8">${ingredient.name}</div>
				</div>
				<div class="spacing-x-small"></div>
				`;
		});
		
		this.container.find("#ingredientList").html(ingredientItems);
		this.container.find("#numberOfPersons").html(this.model.getNumberOfGuests());
		this.container.find("#totalPrice").html('<b>' + round(this.model.getDishPrice(this.model.singleDish) * this.model.getNumberOfGuests(), 2) + ' SEK</b> / Person');
	}

	renderError() {
		this.container.html(/* template */ `
			<div class="scroll-view full">
				<div class="spacing-small"></div>
				<div class="container">
					<div class="row">
						<div class="col-12 text-center in-content-error">
							<div class="spacing"></div>
							<i class="fas fa-cat"></i>
							<div class="spacing-small"></div>
							Oups something went wrong, refresh your browser or try again later...
						</div>
					</div>
				</div>
			</div>
		`);
	}

	afterRender() {
		this.renderIngredientItems();
		this.addToMenuBtn = this.container.find("#addToMenuBtn");
		this.backBtn = this.container.find('#backBtn');
	}
}