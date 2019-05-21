const HEADERS = new Headers({
  "Accept": "application/json",
  "X-Mashape-Key": settings().apiKey,
});
const METHOD = "GET";

class DinnerModel {
	constructor() {
		this.numberOfGuests = 1;
		this.showErrorMessage = false;

		this.dishes = [];
		this.singleDish = null;
		this.menu = [];
  }

	setNumberOfGuests(num) {
    if (num < 0) return;
		this.numberOfGuests = num;
	}

	getNumberOfGuests() {
		return this.numberOfGuests;
	}

	//Returns all the dishes on the menu.
	getFullMenu() {
		return this.menu;
	}

	addDishToMenu(dish) {
		this.menu.push(dish);
	}

	//Removes dish from menu
	removeDishFromMenu(id) {
		this.menu = this.menu.filter(function(dish) {
			return dish.id != id;
		})
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	getAllDishes(type, filter) {
    document.getElementById("loader").style.display = "block";

		if (type || filter) {
      const url = `${settings().apiHost}/recipes/search?type=${type}&query=${filter}`;
      return fetch(url, { method: METHOD, headers: HEADERS })
        .then((response) => {
          if (!response.ok) throw new Error(response.statusCode);
          return response.json();
        })
				.then((data) => {
					this.dishes = data.results;
          document.getElementById("loader").style.display = "none";

          return new Promise(resolve => resolve(this.dishes));
				}).catch((error) => {
          document.getElementById("loader").style.display = "none";
          return new Promise((resolve, reject) => reject(error));
				});
		} else {
      const url = `${settings().apiHost}/recipes/search`;
      return fetch(url, { method: METHOD, headers: HEADERS })
        .then((response) => {
          if (!response.ok) throw new Error(response.statusCode);
          return response.json();
        })
				.then((data) => {
          console.log("data", data);
					this.dishes = data.results;
          document.getElementById("loader").style.display = "none";

          return new Promise(resolve => resolve(this.dishes));
				}).catch((error) => {
          document.getElementById("loader").style.display = "none";

          return new Promise((resolve, reject) => reject(error));
				});
		}
	}

	getDish(id) {
    document.getElementById("loader").style.display = "block";

    const url = `${settings().apiHost}/recipes/${id}/information`;
    return fetch(url, { method: METHOD, headers: HEADERS })
      .then((response) => {
        return response.json();
      })
			.then((data) => {
        document.getElementById("loader").style.display = "none";

        if (data.code === "404") {
          return new Promise((resolve, reject) => reject(data));
        }
				return new Promise(resolve => resolve(data));
			})
      .catch((error) => {
        console.log("error", error);
        return new Promise((resolve, reject) => reject(error));
			});
	}
}
