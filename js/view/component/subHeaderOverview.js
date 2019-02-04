class SubHeaderOverview {
    constructor(container, model) {
        this.container = container;
        this.model = model;
        this.backBtn = null;
    }

    render() {
        this.container.html( /* template */`
            <div class="border-bottom">
                <div class="container">
                    <div class="header sub d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <h2>My dinner: ${this.model.getNumberOfGuests()} people</h2>
                        <div class="spacing-x-small d-md-none"></div>
                        <a id="backBtn" class="btn btn-light btn-primary-color"><i class="fas fa-plus"></i> Go back and edit dinner</a>
                    </div>
                </div>
            </div>
        `);
        this.afterRender();
    }

    afterRender() {
        this.backBtn = this.container.find("#backBtn");
    }
}