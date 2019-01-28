

class DishItemView {
	constructor() {

	}

	render(image, name, price) {
		if (price) {
			return /* template */ `
            <div class="col-md-4 col-lg-2 item-column">
				<div class="item-box">
					<img src="images/${image}" alt="">
					<div class="label text-center">${name}</div>
					<div class="spacing-x-small"></div>
					<b class="text-danger text-center text-lg-right d-block">${price} SEK</b>
				</div>
			</div>
        `
		}

		return /* template */ `
			<div class="col-sm-6 col-md-4 item-column">
				<a class="item-box" href="detail.html">
					<img src="images/${image}" alt="">
					<div class="label text-center">${name}</div>
				</a>
			</div>
		`
	}
}