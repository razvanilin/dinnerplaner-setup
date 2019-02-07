class ListItemView {
	constructor(id, name, price, numberOfGuests) {
		this.name = name;
		this.price = price;
		this.numberOfGuests = numberOfGuests;
		this.id = id;
	}
	render() {
		return /* template */ `
		<div class="list-item row no-gutters justify-content-between">
			<span class="col ellipsis" style="padding-right: 15px;">
				<a class="removeBtn" id=${this.id}><i class="fas fa-times" style="padding-right: 5px;"></i></a> 
				${this.name}</span>
			<span class="col-auto">${this.numberOfGuests} x ${round(this.price, 2)}</span>
		</div>
		`;
	}
}