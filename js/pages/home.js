const Home = {
    components: {
        'ImageContainer': ImageContainer,
        'FilterSection': FilterSection,
        'CinestarName': CinestarName,
        'BoxZanrTime': BoxZanrTime,
        'DisplayZanrTime': DisplayZanrTime
    },
    template: /*html*/`
    <div class="main-container">
        <ImageContainer/>
        <FilterSection/>
        <CinestarName/>
        <BoxZanrTime/>
        <DisplayZanrTime/>
    </div>
    `
}