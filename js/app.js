const routes = [
    { path:'', component:Home },
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    components: { 
        'navbar': navbar
    }
}).$mount('#app')