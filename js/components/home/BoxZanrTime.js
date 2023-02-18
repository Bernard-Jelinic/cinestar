const BoxZanrTime = {
  template: /*html*/`
    <div class="box-zanr-time">
        <div id="Odabir prema žanru" class="zanr" @click="$emit('selected-first-filter', 'genres')">
          Odabir prema žanru
        </div>
        <div id="Odabir prema vremenu prikazivanja" class="time" @click="$emit('selected-first-filter', 'times')">
          Odabir prema vremenu prikazivanja
        </div>
    </div>
    `
}