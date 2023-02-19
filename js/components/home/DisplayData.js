const DisplayData = {
    template: /*html*/`
    <div>
        <div class="display-data" v-for="data in datas">
            <div class="single-data">
                <img
                    class="data-image"
                    :src="data.image"
                    alt="image picture"
                />
                <div class="movie-desc">
                    <h2>{{data.name}}</h2>
                    <p><span>Izvorno ime: </span>{{data.engName}}</p>
                    <p>
                        <span>Redatelj: </span>
                        <template v-for="(director, index) in data.directors">{{director}}
                            <template v-if="index !== data.directors.length - 1"> - </template>
                        </template>
                    </p>
                    <p>
                        <span>Glumci: </span>
                        <template v-for="(actor, index) in data.actors">{{actor}}
                            <template v-if="index !== data.actors.length - 1"> - </template>
                        </template>
                    </p>
                    <p>
                        <span>Žanr: </span>
                        <template v-for="(genre, index) in data.genre">{{genre}}
                            <template v-if="index !== data.genre.length - 1"> - </template>    
                        </template>
                    </p>
                    <p><span>Trajanje: </span>{{data.duration}} min</p>
                    <p><span>Država: </span>{{data.state}}</p>
                    <router-link class="buy-btn" :to="{ name: 'buyMovieTicket', params: { name: data.name} }">
                        <button class="buy-btn">Pogledaj detalje</button>
                    </router-link>
                </div>
            </div>
        </div>
    <!-- tu će ići if -->
        <div class="single-data">
            <p>Pronađeno 0 filmova za pojam {this.props.selectedZanrTime}</p>
        </div>
    </div>
    `,
    data() {
        return {
            count: 0,
            datas: movieData
        }
    },
    created() {
        console.log(this.datas);
    }
}