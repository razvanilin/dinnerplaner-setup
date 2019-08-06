var assert = chai.assert;
var expect = chai.expect;

function delay(interval)
{
   return it('should delay', done =>
   {
      setTimeout(() => done(), interval)

   }).timeout(interval + 100) // The extra 100ms should guarantee the test will not fail due to exceeded timeout
}

describe("DinnerModel", () => {
  let model = new DinnerModel();

  let homeView = new HomeView($("#page-content"));
  let homeController = new HomeController(homeView);

  let mainView = new MainView($("#page-content"), model);
  let mainController = new MainController(mainView, model);

  let overviewView = new OverviewView($("#page-content"), model);
  let overviewController = new OverviewController(overviewView, model);

  beforeEach(() => {
    model = new DinnerModel();

    homeView = new HomeView($("#page-content"));
    homeController = new HomeController(homeView);

    mainView = new MainView($("#page-content"), model);
    mainController = new MainController(mainView, model);

    overviewView = new OverviewView($("#page-content"), model);
    overviewController = new OverviewController(overviewView, model);
  });

  describe("Home View", () => {
    it("has the start button", () => {
      homeController.renderView();
      const button = document.getElementById("startBtn");
      console.log(button);
      expect(button).to.not.be.a("null");
    });
  });

  describe("Search view", () => {
    beforeEach(() => {
      // in this one I feel that everything should be reset before each test case
      // the problem is that the page and all the steps need to be reset
      // resulting in a lot of repetitive code
    });

    it("has a sidebar", () => {
      mainController.renderView();
      const sidebar = document.getElementById("sideBarView");
      expect(sidebar).to.not.be.a("null");
    });

    it("has a dish search container", () => {
      const dishSearch = document.getElementById("dishSearchView");
      expect(dishSearch).to.not.be.a("null");
    });

    it("displays a loading message", (done) => {
      const loader = document.getElementById("loader");
      expect(loader).to.not.be.a("null");

      done();
    }).timeout(3000);

    it("displays dishes", (done) => {
      const dishes = document.getElementById("dishItems");
      expect(dishes).to.not.be.a("null");
      done();
    }).timeout(5000);

    delay(4000);

    it("searches for dishes [controller]", (done) => {
      const dishSearchInput = document.getElementById("dishSearchInput");
      console.log("search input", dishSearchInput);

      dishSearchInput.value = "pizza";
      model.setSearchString("pizza");

      setTimeout(() => {
        const searchBtn = document.getElementById("searchBtn");
        searchBtn.dispatchEvent(new Event("click"));
        expect(model.getSearchString()).to.equal("pizza");
        done();
      }, 1000);

    }).timeout(5000);

    it("clicks on the first dish", (done) => {
      const dishes = document.getElementsByClassName("item-box");
      setTimeout(() => {
        // timeout needed to be able to access the HTMLCollection
        dishes[0].dispatchEvent(new Event("click"));
        setTimeout(() => {
          // make sure everything is loaded on the new page and find the add to menu btn
          const addToMenuBtn = document.getElementById("addToMenuBtn");
          expect(addToMenuBtn).to.not.be.a("null");
          done();
        }, 1000);
      }, 1000);
    }).timeout(3000);

    it("adds the dish to the menu", (done) => {
      const addToMenuBtn = document.getElementById("addToMenuBtn");
      addToMenuBtn.dispatchEvent(new Event("click"));
      setTimeout(() => {
        // now check if the menu list has a child element (aka a dish)
        const menuContainer = document.getElementById("list");
        const menuItems = menuContainer.getElementsByClassName("list-item");
        expect(menuItems.length).to.equal(1);
        done();
      }, 1000)
    }).timeout(2000);
  });
});
