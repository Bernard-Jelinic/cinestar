const Home = {
    components: {
        'ImageContainer': ImageContainer,
        'FilterSection': FilterSection,
        'CinestarName': CinestarName,
        'BoxZanrTime': BoxZanrTime,
        'DisplayZanrTime': DisplayZanrTime,
        'DisplayData': DisplayData
    },
    template: /*html*/`
    <div class="main-container">
        <ImageContainer/>
        <FilterSection/>
        <CinestarName/>
        <BoxZanrTime @selected-first-filter="selectedFirstFilter"/>
        <DisplayZanrTime :selectedFilter="selectedFilter"/>
        <DisplayData/>
    </div>
    `,
    data() {
        return {
            selectedFilter: ''
        }
    },
    methods: {
        selectedFirstFilter(filter) {
            this.selectedFilter = filter
        }
    }
}