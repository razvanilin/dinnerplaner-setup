class DishSearchView {
	constructor(container, model) {
		this.container = container;
		this.model = model;
		this.textInput = null;
		this.selectInput = null;
		this.searchBtn = null;
		
		this.model.getAllDishes()
		this.model.dishesObs.addObserver(this);
	}
	update(payload) {
		if (!this.model.showErrorMessage) {
			this.renderDishItems();
		} else {
			this.renderError();
		}
	}
	render() {
		this.container.html(/* template */ `
			<div class="container border-bottom">
				<div class="spacing-small"></div>
				<h2>${!this.model.getFullMenu().length ? 'Find a dish' : 'Add another one'}</h2>
				<div class="spacing-x-small"></div>
				<div class="d-flex flex-column flex-md-row align-items-start align-items-md-center">
					<input class="form-control" style="max-width: 300px;" type="text" name="" id="textInput" placeholder="Enter key words" value="${this.model.getSearchString()}">
					<div class="h-spacing d-none d-md-block"></div>
					<div class="spacing-x-small d-md-none"></div>
					<select class="form-control" name="" style="max-width: 200px;" id="selectInput">
						${this.renderTypes()}
					</select>
					<div class="h-spacing d-none d-md-block"></div>
					<div class="spacing-x-small d-md-none"></div>
					<button id="searchBtn" class="btn btn-medium btn-primary-color"><i class="fas fa-search"></i> Search</button>
				</div>
				<div class="spacing-small"></div>
			</div>
			<div class="scroll-view">
				<div class="spacing-small"></div>
				<div class="container">
					<div id="dishItems" class="row justify-content-center justify-content-md-start dishes">
						<div class="col-md-12 text-center">
							<div class="spinner-border m-5" role="status">
								<span class="sr-only">Loading...</span>
							</div>
						</div>
					</div>
				</div>
				<div class="spacing-small"></div>
			</div>
		`);
		this.afterRender();
	}
	
	renderDishItems() {
		var dishItems = '';
		if (this.model.dishes.length) {
			this.model.dishes.map((dish, index) => {
				const dishItem = new DishItemView(dish);
				dishItems = dishItems + dishItem.render();
			});
			
			dishItems = dishItems + `
					<div class="col-12 text-center">
						<div class="spacing-small"></div>
						<a class="btn btn-secondary-color"><i class="fas fa-plus"></i> Show more</a>
					</div>`;

			this.container.find('#dishItems').html(dishItems);
		}
	}

	renderError() {
		const error = `
					<div class="col-12 text-center in-content-error">
						<div class="spacing"></div>
						<i class="fas fa-cat"></i>
						<div class="spacing-small"></div>
						Oups something went wrong, refresh your browser or try again later...
					</div>`;
		this.container.find('#dishItems').html(error);
	}

	renderTypes() {
		var typeItems = '';
		this.model.type.forEach(type => {
			typeItems += /* template */ `
				<option value="${type}" ${this.model.getSearchType() == type ? 'selected' : ''}>${type == "" ? "All" : type}</option>
			`
			
		});
		return typeItems;
		
	}

	afterRender() {
		this.textInput = this.container.find("#textInput");
		this.selectInput = this.container.find("#selectInput");
		this.searchBtn = this.container.find("#searchBtn");
		this.renderDishItems();
	}
}