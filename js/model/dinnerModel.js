var networkService = new NetworkService();

class DinnerModel {
	constructor() {
		this.searchString = '';
		this.searchType = '';
		this.numberOfGuests = 1;
		
		this.dishes = [];
		this.singleDish = null;
		this.menu = [];
		
		this.numberOfGuestsObs = new Observable();
		this.dishesObs = new Observable();
		this.singleDishObs = new Observable();
	}

	setSearchString(string) {
		this.searchString = string;
	}
	
	getSearchString() {
		return this.searchString;
	}

	setSearchType(type) {
		this.searchType = type;
	}

	getSearchType() {
		return this.searchType;
	}

	setNumberOfGuests(num) {
		this.numberOfGuests = num;
		this.numberOfGuestsObs.updateValue(num);
	}
	
	getNumberOfGuests() {
		return this.numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	getSelectedDish(type) {
		return this.menu.filter(function (dish) {
			return dish.type == type;
		});
	}

	//Returns all the dishes on the menu.
	getFullMenu() {
		return this.menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	getAllIngredients() {
		var ingredients = [];

		this.menu.forEach(function (dish) {
			//ingredients = ingredients.concat(dish.ingredients)
		})

		return ingredients;
	}

	//Returns the price of the dish
	getDishPrice(id) {
		return 0;
		var dish = this.getDish(id);
		var price = 0;
		
		dish.ingredients.forEach(function (ingredient) {
			price += ingredient.price;
		})

		return price;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	getTotalMenuPrice() {
		var price = 0;
		var allIngredients = this.getAllIngredients();

		allIngredients.forEach(function (ingredient) {
			price += ingredient.price;
		})
		
		return price;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	addDishToMenu(id) { 
		//this.menu.push(this.getDish(id));
		this.menu.push(this.singleDish);
	}

	//Removes dish from menu
	removeDishFromMenu(id) {
		return this.menu.filter(function(dish) {
			return dish.id != id;
		})
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	getAllDishes() {
		var type = this.searchType.toLowerCase();
		var filter = this.searchString.toLowerCase();

		// TODO get filtered items...

		if (type || filter) {
			networkService.getDishesByFilter(filter, type)
				.then(data => {
					this.dishes = data.results.map(dish => this.mapDish(data.baseUri, dish));
					this.dishesObs.updateValue(this.menu);
				});
		} else {
			networkService.getDishes()
				.then(data => {
					this.dishes = data.results.map(dish => this.mapDish(data.baseUri, dish));
					this.dishesObs.updateValue(this.menu);
				});
		}

		/*
		var type = this.searchType.toLowerCase();
		var filter = this.searchString.toLowerCase();

		return dishes.filter((dish) => {
			let found = true;
			if (!type && !filter) {				
				return true; // return all the dishes for the case no filter is set and all is selected
			}
			if (filter) {
				found = false;
				dish.ingredients.forEach((ingredient) => {
					if (ingredient.name.toLowerCase().indexOf(filter) != -1) {
						found = true;
					}
				});
				if (dish.name.toLowerCase().indexOf(filter) != -1) {
					found = true;
				}
			}
			return type === '' ? found : dish.type == type && found;
		});
		*/
	}

	//function that returns a dish of specific ID
	getDish(id) {
		networkService.getDish(id)
			.then(data => {
				this.singleDish = this.mapDish(null, data);
				this.singleDishObs.updateValue(this.singleDish);
			});

		/*
		for(let key in dishes){
			if(dishes[key].id == id) {
				return dishes[key];
			}
		}
		*/
	}

	mapDish(baseUri, dish) {
		return {
			'id': dish.id ? dish.id : null,
			'name': dish.title ? dish.title : null,
			'type': dish.dishTypes ? dish.dishTypes : null,
			'image': dish.image && baseUri ? baseUri + dish.image : dish.image,
			'description': dish.instructions ? dish.instructions : null,
			'ingredients': dish.extendedIngredients ? dish.extendedIngredients.map(ingredient => {
					return {
						'name': ingredient.originalName,
						'quantity': ingredient.amount,
						'unit': ingredient.unit,
						'price': null,
					}
				}) : null,
		}
	}
}