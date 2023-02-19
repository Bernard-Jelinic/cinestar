const routes = [
    { path: '', component: Home },
    { path: '/buyMovieTicket/:name', name: "buyMovieTicket", component: BuyMovieTicket, props: true },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    components: {
        'navbar': navbar,
        'copyright-footer': copyrightfooter
    }
}).$mount('#app')