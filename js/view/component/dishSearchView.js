class DishSearchView {
	constructor(container, model) {
		this.container = container;
		this.model = model;
		this.textInput = null;
		this.selectInput = null;
		this.searchBtn = null;

	}
	render() {
		this.container.html(/* template */ `
			<div class="container border-bottom">
				<div class="spacing-small"></div>
				<h2>${!this.model.getFullMenu().length ? 'Find a dish' : 'Add another one'}</h2>
				<div class="spacing-x-small"></div>
				<div class="d-flex flex-column flex-md-row align-items-start align-items-md-center">
					<input type="text" name="" id="textInput" placeholder="Enter key words" value="${this.model.getSearchString()}">
					<div class="h-spacing d-none d-md-block"></div>
					<div class="spacing-x-small d-md-none"></div>
					<select name="" id="selectInput">
						<option value="" ${this.model.getSearchType() == "" ? 'selected' : ''}>All</option>
						<option value="Main dish" ${this.model.getSearchType() == "Main dish" ? 'selected' : ''}>Main Course</option>
						<option value="Side Dish" ${this.model.getSearchType() == "Side Dish" ? 'selected' : ''}>Side Dish</option>
						<option value="Dessert" ${this.model.getSearchType() == "Dessert" ? 'selected' : ''}>Dessert</option>
						<option value="starter" ${this.model.getSearchType() == "starter" ? 'selected' : ''}>Appetizer</option>
					</select>
					<div class="h-spacing d-none d-md-block"></div>
					<div class="spacing-x-small d-md-none"></div>
					<button id="searchBtn" class="btn btn-medium btn-primary-color">Search</button>
				</div>
				<div class="spacing-small"></div>
			</div>
			<div class="scroll-view">
				<div class="spacing-small"></div>
				<div class="container">
					<div id="dishItems" class="row justify-content-center justify-content-md-start dishes">
						${this.renderDishItems()}
					</div>
				</div>
				<div class="spacing-small"></div>
			</div>
		`);
		this.afterRender();
	}
	renderDishItems() {
		var dishItems = '';
		this.model.getAllDishes().map((dish, index) => {
			const dishItem = new DishItemView(dish.id, dish.image, dish.name);
			dishItems = dishItems + dishItem.render();
		});
		return dishItems;
	}

	afterRender() {
		this.textInput = this.container.find("#textInput");
		this.selectInput = this.container.find("#selectInput");
		this.searchBtn = this.container.find("#searchBtn")
	}
}