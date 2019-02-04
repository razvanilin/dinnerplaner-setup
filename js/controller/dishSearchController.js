class DishSearchController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    renderView() {
        this.view.render();
        this.addEventListeners();
    }

    addEventListeners() {
        this.view.searchBtn.on("click", () => {
            this.search();
           
        });

        this.view.textInput.on("keyup" , (e) => {
            e.preventDefault();

            if (e.keyCode == 13) {
                this.search();
            }
            
        })
    }

    search() {
        this.model.setSearchString(this.view.textInput.val());
        this.model.setSearchType(this.view.selectInput.val());

        navigate('select');
    }
}