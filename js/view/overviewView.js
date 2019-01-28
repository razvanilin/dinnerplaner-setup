
class OverviewView {
    constructor(container, model, isPrintView) {
        this.container = container;
        this.model = model;
        this.isPrintView = isPrintView;
    }

    render() {
        var subheader = new SubHeaderOverview(this.model.getNumberOfGuests(), "");
        var content = /* template */ `
        ${subheader.render()}

        <div class="spacing"></div>
        <div class="container">
            <div class="row justify-content-center">

                ${this.getDishesOnMenu()}

                ${!this.isPrintView ? this.getTotalPrice() : ''}
            </div>
            
            ${!this.isPrintView ? this.getSpacing() : ""}
            ${!this.isPrintView ? this.getToPrintBtn() : ""}
        </div>
        `

        this.container.html(content);
    }

    getDishesOnMenu() {
        var elements = "";
        this.model.getFullMenu().map((dish, index) => {
            var dishItemView = new DishItemView(dish.image, dish.name, this.model.getDishPrice(dish.id));
            if (this.isPrintView) {
                dishItemView = new DishPreparationView(dish);
            }
            elements = elements.concat(dishItemView.render());
        });
        return elements;
    }

    getToPrintBtn() {
        return /* template */ `
        <div class="text-center">
            <a href="" class="btn btn-lg btn-primary-color">Print Full Recipe</a>
        </div>
        <div class="spacing"></div>
        `;
    }

    getTotalPrice() {
        return /* template */`
        <div class="col-md-12 col-lg-2 item-column ">
            <div class="item-box padding-left border-left d-flex flex-column justify-content-end">
                <b>Total: </b>
                <b class="text-danger">${this.model.getTotalMenuPrice()} SEK</b>
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