const DisplayZanrTime = {
    template: /*html*/`
    <div class="display-zanr-time">
        <ul v-if="selectedFilter == 'genres'">
            <li v-for="genre in genres">{{genre}}</li>
        </ul>
        <ul v-if="selectedFilter == 'times'">
            <li v-for="time in times">{{time}}</li>
        </ul>
    </div>
    `,
    props: ['selectedFilter'],
    data() {
        return {
            genres: ["Komedija", "Drama", "Horor", "Sf", "Akcija", "Kriminalistički", "Drama"],
            times: ["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota", "Nedjelja"]
        }
    }
}