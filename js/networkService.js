const BASE_URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com";
const API_KEY = "3d2a031b4cmsh5cd4e7b939ada54p19f679jsn9a775627d767";

const requestService = new RequestService();

class NetworkService {
  getRecipes() {
    var url = `${BASE_URL}/recipes/random`;
    var headers = { 'content-type': 'application/json', 'X-Mashape-Key': API_KEY };

    return requestService.getRequest(url, headers);
  }
}