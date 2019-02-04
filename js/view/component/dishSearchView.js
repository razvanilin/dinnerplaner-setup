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
		this.renderDishItems();
	}
	render() {
		this.container.html(/* template */ `
			<div class="container border-bottom">
				<div class="spacing-small"></div>
				<h2>${!this.model.getFullMenu().length ? 'Find a dish' : 'Add another one'}</h2>
				<div class="spacing-x-small"></div>
				<form>
					<div class="d-flex flex-column flex-md-row align-items-start align-items-md-center">
						<input class="form-control" style="max-width: 300px;" type="text" name="" id="textInput" placeholder="Enter key words" value="${this.model.getSearchString()}">
						<div class="h-spacing d-none d-md-block"></div>
						<div class="spacing-x-small d-md-none"></div>
						<select class="form-control" name="" style="max-width: 200px;" id="selectInput">
							<option value="" ${this.model.getSearchType() == "" ? 'selected' : ''}>All</option>
							<option value="Main dish" ${this.model.getSearchType() == "Main dish" ? 'selected' : ''}>Main Course</option>
							<option value="Side Dish" ${this.model.getSearchType() == "Side Dish" ? 'selected' : ''}>Side Dish</option>
							<option value="Dessert" ${this.model.getSearchType() == "Dessert" ? 'selected' : ''}>Dessert</option>
							<option value="starter" ${this.model.getSearchType() == "starter" ? 'selected' : ''}>Appetizer</option>
						</select>
						<div class="h-spacing d-none d-md-block"></div>
						<div class="spacing-x-small d-md-none"></div>
						<button id="searchBtn" class="btn btn-medium btn-primary-color"><i class="fas fa-search"></i> Search</button>
					</div>
				</form>
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
			this.container.find('#dishItems').html(dishItems);
		}
	}

	afterRender() {
		this.textInput = this.container.find("#textInput");
		this.selectInput = this.container.find("#selectInput");
		this.searchBtn = this.container.find("#searchBtn");
		this.renderDishItems();
	}
}