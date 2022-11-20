const routes = [
    { path:'', component:home },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    components: { Navbar }
}).$mount('#app')