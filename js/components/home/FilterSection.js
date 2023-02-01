const FilterSection = {
    template: /*html*/`
    <div class="filter-section">
        <select id="select-city" v-model="selectedId">
            <option disabled value="">Odaberi kino</option>
            <option v-for="city in cities" :value="city.id" :key="city.id">{{city.name}}</option>
        </select>
        <div class="input-search">
            <input
                class="input"
                type="text"
                placeholder="Traži na Cinestaru"
            />
          <i class="fa fa-search"></i>
        </div>
    </div>
    `,
    data() {
        return {
            selectedId: '',
            cities: dataCity
        }
    },
    watch: {
        selectedId() {
            console.log('selected id of record->', this.selectedId)
        }
    }
}