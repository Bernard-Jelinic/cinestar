const CinestarName = {
    template: `
    <div class="cinestar-name">
        <div class="cinestar-name-small">
            <p>Naslovna &gt;&nbsp;</p>
            <p class="small-city-text">{{selectedCity}}</p>
        </div>
        <div class="cinestar-name-big">
            <h1 class="big-city-text">{{selectedCity}}</h1>
        </div>
    </div>
    `,
    data() {
        return {
            selectedCity: 'Zagreb'
        }
    }
}