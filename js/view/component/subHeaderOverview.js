class SubHeaderOverview {
    constructor(container, model) {
        this.container = container;
        this.model = model;
    }

    render() {
        this.container.html( /* template */`
            <div class="border-bottom">
                <div class="container">
                    <div class="header sub d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <h2>My dinner: ${this.model.getNumberOfGuests()} people</h2>
                        <div class="spacing-x-small d-md-none"></div>
                        <a onClick="navigate('select')" class="btn btn-light btn-primary-color">Go back and edit dinner</a>
                    </div>
                </div>
            </div>
        `);
    }
}