const DisplayZanrTime = {
    template: /*html*/`
    <div class="display-zanr-time">
        <ul>
            <li v-for="genre in genres">{{genre}}</li>
        </ul>
        <ul>
            <li v-for="time in times">{{time}}</li>
        </ul>
    </div>
    `,
    data() {
        return {
            genres: ["Komedija", "Drama", "Horor", "Sf", "Akcija", "Kriminalistički", "Drama"],
            times: ["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota", "Nedjelja"]
        }
    }
}