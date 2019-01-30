class ListItemView {
	constructor(name, price, numberOfGuests) {
		this.name = name;
		this.price = price;
		this.numberOfGuests = numberOfGuests;
	}
	render() {
		return /* template */ `
		<div class="list-item d-flex justify-content-between text-danger">
			<span>${this.name}</span>
			<span>${this.numberOfGuests} x ${this.price}</span>
		</div>
		`;
	}
}