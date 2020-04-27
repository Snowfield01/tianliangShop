import Vue from '../node_modules/vue/dist/vue.min.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入组件
import homeContainer from '../components/tabbar/HomeContainer.vue' 
import memberContainer from '../components/tabbar/MemberContainer.vue'
import searchContainer from '../components/tabbar/SearchContainer.vue'
import shopcarContainer from '../components/tabbar/ShopcarContainer.vue'


let router = new VueRouter({
    routes:[
        {path:'/',component:homeContainer},
        {path:'/homeContainer',component:homeContainer},
        {path:'/memberContainer',component:memberContainer},
        {path:'/searchContainer',component:searchContainer},
        {path:'/shopcarContainer',component:shopcarContainer}
    ],
    linkActiveClass:'mui-active'
})

export default router