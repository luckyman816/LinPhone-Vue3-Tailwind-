import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faCog, 
    faEllipsisV,
    faEllipsisH, 
    faBell, 
    faHome, 
    faChartBar, 
    faUser,
    faComment,
    faBusinessTime,
    faPhone,
    faTh,
    faLanguage,
    faBriefcase,
    faShoppingCart,
    faSearch,
    faPlus,
    faCheck,
    faCommentDots,
    faPhoneVolume,
    faUsers,
    faEnvelope,
    faArrowUp,
    faPhoneSlash,
    faLocationArrow,
    faVideo,
    faUserPlus,
    faTrashCan,
    faCamera,
    faCirclePlus,
    faHouse,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/css/index.css'
library.add(
    faCog, 
    faEllipsisV,
    faEllipsisH, 
    faBell, 
    faHome, 
    faChartBar, 
    faUser,
    faComment,
    faBusinessTime,
    faPhone,
    faTh,
    faLanguage,
    faBriefcase,
    faShoppingCart,
    faSearch,
    faPlus,
    faCheck,
    faCommentDots,
    faPhoneVolume,
    faUsers,
    faEnvelope,
    faArrowUp,
    faPhoneSlash,
    faLocationArrow,
    faVideo,
    faUserPlus,
    faTrashCan,
    faCamera,
    faCirclePlus,
    faHouse,
    )

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
