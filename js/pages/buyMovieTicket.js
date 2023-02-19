const BuyMovieTicket = {
    template: /*html*/`
    <div class="display-data">
        <div class="single-data">
            <img class="data-image" :src="selectedMovie.image" alt="picture of movie"/>
            <div class="movie-desc">
              <h2>{{selectedMovie.name}}</h2>
                <p><span>Izvorno ime: </span>{{selectedMovie.engName}}</p>
                <p><span>Sadržaj filma: </span>{{selectedMovie.desc}}</p>
                <p>
                    <span>Redatelj: </span>
                    <template v-for="(director, index) in selectedMovie.directors">{{director}}
                        <template v-if="index !== selectedMovie.directors.length - 1"> - </template>
                    </template>
                </p>
                <p>
                    <span>Glumci: </span>
                    <template v-for="(actor, index) in selectedMovie.actors">{{actor}}
                        <template v-if="index !== selectedMovie.actors.length - 1"> - </template>
                    </template>
                </p>
                <p>
                    <span>Žanr: </span>
                    <template v-for="(genre, index) in selectedMovie.genre">{{genre}}
                        <template v-if="index !== selectedMovie.genre.length - 1"> - </template>    
                    </template>
                </p>
                <p><span>Trajanje: </span>{{selectedMovie.duration}} min</p>
                <p><span>Država: </span>{{selectedMovie.state}}</p>
            </div>
        </div>
        <div class="buying-details">
          <p>
            <span>Grad: </span>
            <select id="select-city">
                <option defaultValue hidden>Odaberi kino</option>
                <template v-for="(city, index) in Object.keys(selectedMovie.price)">
                    <option :key="index">{{city}}</option>
                </template>
            </select>
          </p>

          <div class="day-select">
            <span>Odaberi dan:</span>
            <select>
                <option hidden>Odaberi dan</option>
                <template v-for="(day, index) in selectedMovie.time">
                    <option :key="index">{{day}}</option>
                </template>
            </select>
          </div>
          
        <div class="ticket-type">
            <span>Vrsta ulaznice:</span>
            <select>
                <option hidden>Odaberi vrstu ulaznice</option>
                <option>4DX</option>
                <option>REALD 3D</option>
                <option>pretpremijera</option>
            </select>
        </div>
       
          <div class="ticket-number">
            <span>Broj ulaznica:</span>
            <button @click="changeNumberOfTicket('subtract')">-</button>
              <a>{{ numberOfTicket }}</a>
            <button @click="changeNumberOfTicket('add')">+</button>
            <a id="warning"></a>
          </div>

          <div class="end-details">
            <p>Cijena jedne ulaznice: <span>{{ priceOfOneTicket }} kn</span></p>
            <p>Ukupno: <span>{{ sumOfTicketPrice }} kn</span></p>
            <button>Kupi kartu</button>
            <a id="buy-warning"></a>
          </div>

        </div>
      </div>
    `,
    props: ['name'],
    data() {
        return {
            datas: movieData,
            numberOfTicket: 1,
            priceOfOneTicket: 0,
            // selectedMovie: {}
        }
    },
    computed: {
        selectedMovie() {
            return movieData.find(movie => movie.name == this.name)
        },
        sumOfTicketPrice() {
            return this.numberOfTicket * this.priceOfOneTicket
        }
    },
    created() {
        console.log('name', this.name);

        // this.selectedMovie = movieData.find(movie => movie.name == this.name)
        console.log('selecmovieDataedMovie', this.datas);

        console.log('Object.keys(selectedMovie.price)', Object.keys(this.selectedMovie.price))

        Object.keys(this.selectedMovie.price).forEach(city => {
            console.log('city->', city)
        });

    },
    methods: {
        changeNumberOfTicket(param) {
            if (param == 'subtract' && this.numberOfTicket > 1) {
                this.numberOfTicket--
            } else if (param == 'add' && this.numberOfTicket >= 1) {
                this.numberOfTicket++
            }
        }
    }
}