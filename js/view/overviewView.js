
class OverviewView {
    constructor(container, model) {
        this.container = container;
        this.model = model;

        this.subheader = new SubHeaderOverview(model.getNumberOfGuests(), "");
    }

    render() {
        var content = /* template */ `
        ${this.subheader.render()}

        <div class="spacing"></div>
        <div class="container">
            <div class="row justify-content-center">

                ${this.getDishesOnMenu()}

                <div class="col-md-12 col-lg-2 item-column ">
				<div class="item-box padding-left border-left d-flex flex-column justify-content-end">
					<b>Total: </b>
					<b class="text-danger">${this.model.getTotalMenuPrice()} SEK</b>
				</div>
			</div>
            </div>
            <div class="spacing"></div>
            <hr>
            <div class="spacing"></div>
            <div class="text-center">
                <a href="" class="btn btn-lg btn-primary-color">Print Full Recipe</a>
            </div>
            <div class="spacing"></div>

        </div>
        `

        this.container.html(content);
    }

    getDishesOnMenu() {
        var elements = "";
        this.model.getFullMenu().map((dish, index) => {
            const dishItemView = new DishItemView(dish.image, dish.name, this.model.getDishPrice(dish.id));
            elements = elements.concat(dishItemView.render());
        });
        return elements;
    }
}