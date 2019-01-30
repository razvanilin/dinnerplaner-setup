class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.subHeader = null;
    }

    render(isPrint) {
        this.container.html(/* template */ `
            <div class="header d-flex align-items-center justify-content-center">
                <h1>Dinner Planner</h1>
            </div>
            <div id="subHeaderView"></div>
            <div class="spacing"></div>
            <div class="container">
                <div class="row justify-content-center">
                    ${this.getDishesOnMenu(isPrint)}
                    ${!isPrint ? this.getTotalPrice() : ''}
                </div>
                ${!isPrint ? this.getSpacing() : ""}
                ${!isPrint ? this.getToPrintBtn() : ""}
            </div>
        `);
    }

    afterRender() {
        this.subHeader = this.container.find("#subHeaderView");
    }

    getDishesOnMenu(isPrint) {
        var elements = "";
        this.model.getFullMenu().map((dish, index) => {
            var dishItemView = new DishItemView(dish.id, dish.image, dish.name, this.model.getDishPrice(dish.id) * this.model.getNumberOfGuests());
            if (isPrint) {
                dishItemView = new DishPreparationView(dish);
            }
            elements = elements.concat(dishItemView.render());
        });
        return elements;
    }

    getToPrintBtn() {
        return /* template */ `
        <div class="text-center">
            <a onClick="navigate('print')" class="btn btn-lg btn-primary-color">Print Full Recipe</a>
        </div>
        <div class="spacing"></div>
        `;
    }

    getTotalPrice() {
        return /* template */`
        <div class="col-md-12 col-lg-2 item-column ">
            <div class="item-box padding-left border-left d-flex flex-column justify-content-end">
                <b>Total: </b>
                <b class="text-danger">${this.model.getTotalMenuPrice() * this.model.getNumberOfGuests()} SEK</b>
            </div>
        </div>
        `
    }

    getSpacing() {
        return /* template */`
        <div class="spacing-small"></div>
        <hr>
        <div class="spacing-small"></div>
        `
    }
}