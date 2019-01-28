class ListItemView {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	render() {
		return /* template */ `
		<div class="list-item d-flex justify-content-between text-danger">
			<span>${this.name}</span>
			<span>${this.price}</span>
		</div>
		`
	}
}