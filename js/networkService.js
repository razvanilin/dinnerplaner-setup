const BASE_URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com";
const requestService = new RequestService();

class NetworkService {
  getDish(id) {
    var url = `${BASE_URL}/recipes/${id}/information`;
    return requestService.getRequest(url, API_KEY);
  }
  
  getDishes(limit) {
    var url = `${BASE_URL}/recipes/search?number=${limit}`;
    return requestService.getRequest(url, API_KEY);
  }

  getDishesByFilter(query, type, limit = 9) {
    var url = `${BASE_URL}/recipes/search?number=${limit}&type=${type}&query=${query}`;
    return requestService.getRequest(url, API_KEY);
  }

  getMoreDishes(offset, limit) {
    var url = `${BASE_URL}/recipes/search?offset=${offset}&number=${limit}`;
    return requestService.getRequest(url, API_KEY);
  }
}