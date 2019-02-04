class SideBarController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    renderView() {
        this.view.render();
        this.addEventListeners();
    }

    addEventListeners() {
        this.view.numberOfGuestInput.on("input", () => {
            this.model.setNumberOfGuests(this.view.numberOfGuestInput[0].value);
        });

        this.view.confirmBtn.on("click", () => {
            navigate('overview');
        })

        this.view.removeBtn.map((index, btn) => {            
            $(btn).on("click", (e) => {
                var toRemove = e.currentTarget.id;
                this.model.removeDishFromMenu(toRemove);
            })
            
            
        })        
    
    }
}