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
                    <p><span>Redatelj: </span>{{data.director}}</p>
                    <p><span>Glumci: </span>{{data.actors}}</p>
                    <p><span>Žanr: </span>{{data.genre}}</p>
                    <p><span>Trajanje: </span>{{data.duration}} min</p>
                    <p><span>Država: </span>{{data.state}}</p>
                </div>
            </div>
        </div>
    <!-- tu će ići if -->
        <div class="display-data">
              <div class="single-data">
                <img
                  class="data-image"
                  alt="image picture"
                />
                <div class="movie-desc">
                  <h2>{data.name}</h2>
                  <p><span>Izvorno ime: </span>{data.engName}</p>
                  <p><span>Redatelj: </span>{data.director}</p>
                  <p><span>Glumci: </span>{joinArrayActors}</p>
                  <p><span>Žanr: </span>{joinArrayGenre}</p>
                  <p><span>Trajanje: </span>{data.duration} min</p>
                  <p><span>Država: </span>{data.state}</p>
                  <button class="buy-btn">Rezerviraj kartu</button >
                </div >
              </div >
        </div>
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