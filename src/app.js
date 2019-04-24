import DinnerModel from "./model/dinnerModel.js";

const dinnerModel = new DinnerModel();

function addGuest() {
  dinnerModel.setNumberOfGuests(dinnerModel.getNumberOfGuests() + 1);
}
