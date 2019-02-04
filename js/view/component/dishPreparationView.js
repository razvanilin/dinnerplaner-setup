class DishPreparationView {
    constructor(dish) {
		this.dish = dish;
	}
	
    render() {		
        var content = /* template */ `
		<div class="col-lg-10">
			<div class="medium-spacing"></div>
			<div class="row">
				<div class="col-lg-6">
					<div class="flex-column flex-md-row align-items-start">
						<div class="media-body">
							<h1 class="mt-0">${this.dish.name}</h1>
						</div>
						<img class="mr-4" src="${this.dish.image}" alt="Generic placeholder image">
						<div class="spacing-x-small d-lg-none"></div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="spacing-small d-lg-none"></div>
					<h4>Preparation</h4>
					<p>${this.dish.description}</p>
				</div>
			</div>
			<hr>
		</div>
        `
        return content;
    }
}