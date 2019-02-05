class SideBarController {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        this.model.menuObs.addObserver(this);
        this.model.numberOfGuestsObs.addObserver(this);

    }

    renderView() {
        this.view.render();
        this.addEventListeners();
    }

    update(payload) {
        if (payload.message == "element removed") {
            
        }
        this.addEventListenersList();
        
    }

    addEventListeners() {
        this.view.numberOfGuestInput.on("input", () => {
            this.model.setNumberOfGuests(this.view.numberOfGuestInput[0].value);
        });

        this.view.confirmBtn.on("click", () => {
            navigate('overview');
        })     
        
        this.addEventListenersList();
    }

    addEventListenersList() {
        this.view.removeBtn.map((index, btn) => {
            $(btn).on("click", (e) => {
                var toRemove = e.currentTarget.id;
                this.model.removeDishFromMenu(toRemove);
            })
        })  
    }
}