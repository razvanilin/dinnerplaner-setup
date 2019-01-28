

class DishPreparationView {
    constructor(dish) {
		this.dish = dish;
		console.log(dish);
    }

    render() {
        var content = /* template */ `
		<div class="col-lg-10">
			<div class="medium-spacing"></div>
			<div class="row">
				<div class="col-lg-6">
					<div class="media flex-column flex-md-row align-items-start">
						<img class="mr-4" src="images/icecream.jpg" alt="Generic placeholder image">
						<div class="spacing-x-small d-lg-none"></div>
						<div class="media-body">
							<h2 class="mt-0 spacing">${this.dish.name}</h2>
							${this.dish.type}
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="spacing-small d-lg-none"></div>
					<h4 class="spacing">PREPARATION</h4>
					<p>${this.dish.description}</p>
				</div>
			</div>
			<hr>
		</div>
        `
        return content;
    }
}