class SubHeaderOverview {
    constructor() {

    }

    render(numGuests, link) {
        return /* template */`
            <div class="border-bottom">
                <div class="container">
                    <div class="header sub d-flex flex-column flex-md-row align-items-center justify-content-between">
                        <h2>My dinner: ${numGuests} people</h2>
                        <div class="spacing-x-small d-md-none"></div>
                        <a href="${link}" class="btn btn-light btn-primary-color">Go back and edit dinner</a>
                    </div>
                </div>
            </div>
        `
    }
}