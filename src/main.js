import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {
    Button,
    Menu,
    Layout,
    Tabs,
    ConfigProvider,
    Image,
    Avatar,
    Space
} from 'ant-design-vue'

let app = createApp(App);
app.use(router);
app.use(Button);
app.use(Layout);
app.use(Tabs);
app.use(Menu);
app.use(ConfigProvider);
app.use(Image);
app.use(Avatar);
app.use(Space);
app.mount('#app');
