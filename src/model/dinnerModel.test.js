import DinnerModel from "./dinnerModel";

describe("DinnerModel", () => {
  let model = new DinnerModel();

  beforeEach(() => {
    model = new DinnerModel();
  });

  describe("number of guests", () => {
    it("can set and get number of guests", () => {
      model.setNumberOfGuests(0);
      expect(model.getNumberOfGuests()).toEqual(0);

      model.setNumberOfGuests(1);
      expect(model.getNumberOfGuests()).toEqual(1);
    });

    it("won't allow negative number of guests", () => {
      model.setNumberOfGuests(1);
      expect(model.getNumberOfGuests()).toEqual(1);

      // this should not change the value
      model.setNumberOfGuests(-1);
      expect(model.getNumberOfGuests()).toEqual(1);
    });
  });

  describe("getting individual dishes", () => {
    it("gets the correct dish", () => {
      const dish1 = model.getDish(1);
      expect(dish1.id).toEqual(1);
      expect(dish1.name).toEqual("French toast");

      const dish100 = model.getDish(100);
      expect(dish100.id).toEqual(100);
      expect(dish100.name).toEqual("Meat balls");
    });

    it("returns undefined if dish is not found", () => {
      const result1 = model.getDish(-1);
      expect(result1).toEqual(undefined);

      const result2 = model.getDish();
      expect(result2).toEqual(undefined);
    });
  });

  describe("filtering for dishes", () => {
    it("returns all dishes if no args are specified", () => {
      const allDishes = model.getAllDishes();
      expect(allDishes.length).toEqual(10);
    });

    it("returns the correct dish type", () => {
      let dishes = model.getAllDishes("starter");
      const onlyHasStarters = dishes.every(dish => dish.type === "starter");
      expect(onlyHasStarters).toEqual(true);

      dishes = model.getAllDishes("main dish");
      const onlyHasMain = dishes.every(dish => dish.type === "main dish");
      expect(onlyHasMain).toEqual(true);
    });

    it("filters with keywords", () => {
      let dishes = model.getAllDishes("", "French");
      let allDishesMatch = dishes.every(dish => dish.name.includes("French"));
      expect(dishes.length).toBeGreaterThan(0);
      expect(allDishesMatch).toEqual(true);

      dishes = model.getAllDishes("", "Meat");
      allDishesMatch = dishes.every(dish => dish.name.includes("Meat"));
      expect(dishes.length).toBeGreaterThan(0);
      expect(allDishesMatch).toEqual(true);
    });

    it("returns correct dishes with filter and type", () => {
      const dishes = model.getAllDishes("starter", "Sour");
      const allDishesMatch = dishes.every(
        dish => dish.name.includes("Sour") && dish.type === "starter"
      );
      expect(dishes.length).toBeGreaterThan(0);
      expect(allDishesMatch).toEqual(true);
    });
  });

  describe("menu", () => {
    it("can add dishes", () => {
      model.addDishToMenu(1);
      expect(model.getFullMenu()).toContain(model.getDish(1));

      model.addDishToMenu(100);
      expect(model.getFullMenu()).toContain(model.getDish(1));
      expect(model.getFullMenu()).toContain(model.getDish(100));
    });

    it("overwrites dishes of the same type when adding", () => {
      model.addDishToMenu(1);
      expect(model.getFullMenu()).toContain(model.getDish(1));

      model.addDishToMenu(2);
      // the old starter dish should no longer exist
      expect(model.getFullMenu()).not.toContain(model.getDish(1));
      // the new dish should exist
      expect(model.getFullMenu()).toContain(model.getDish(2));
    });

    it("can remove dishes", () => {
      model.addDishToMenu(1);
      // dish 1 should be in the menu
      expect(model.getFullMenu()).toContain(model.getDish(1));

      model.removeDishFromMenu(1);
      // should now be removed
      expect(model.getFullMenu()).not.toContain(model.getDish(1));
    });
  });
});
