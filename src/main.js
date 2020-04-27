console.log('ok')
// 导入vue包
import Vue from '../node_modules/vue/dist/vue.js'
// 引入app
import App from './App.vue'

// 导入router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入 mint ui
import 'mint-ui'

// 导入 mint ui
import '../node_modules/mint-ui/lib/style.min.css'
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入 mui
import '../lib/mui/css/mui.min.css'
import '../lib/mui/fonts/mui.ttf'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui-icons-extra.ttf'


let vm = new Vue({
    el:'#app',
    data:{},
    methods:{},
    render:c=>c(App),
    router:router
})
