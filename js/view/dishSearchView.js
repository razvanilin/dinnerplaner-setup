class DishSearchView {
	constructor(model) {
		this.model = model;
	}
	render() {
		return /* template */ `
			<div class="container border-bottom">
				<div class="spacing-small"></div>
				<h2>${!this.model.getFullMenu().length ? 'Find a dish' : 'Add another one'}</h2>
				<div class="spacing-x-small"></div>
				<div class="d-flex flex-column flex-md-row align-items-start align-items-md-center">
					<input type="text" name="" id="" placeholder="Enter key words">
					<div class="h-spacing d-none d-md-block"></div>
					<div class="spacing-x-small d-md-none"></div>
					<select name="" id="">
						<option value="Main Course">Main Course</option>
						<option value="Side Dish">Side Dish</option>
						<option value="Dessert">Dessert</option>
						<option value="Appetizer">Appetizer</option>
					</select>
					<div class="h-spacing d-none d-md-block"></div>
					<div class="spacing-x-small d-md-none"></div>
					<button class="btn btn-medium btn-primary-color">Search</button>
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
		`;
	}
	renderDishItems() {
		
		var dishItems = '';
		this.model.getAllDishes().map((dish, index) => {
			const dishItem = new DishItemView(dish.image, dish.name);
			dishItems = dishItems + dishItem.render();
		});
		return dishItems;
	}
}