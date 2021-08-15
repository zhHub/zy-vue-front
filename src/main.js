import {createApp} from 'vue'
import App from './App'
import router from './router'
import {
    Button,
    Menu,
    Layout,
    Tabs,
    ConfigProvider,
    Image,
    Avatar,
    Space,
    Row,
    Col,
    Badge,
    Alert,
    Table,
    Form,
    Input,
    Checkbox,
    DatePicker,
    Select,
    Switch,
    Radio,
    Modal
} from 'ant-design-vue'
import * as Icons from "@ant-design/icons-vue";


let app = createApp(App);
/* 按需引入 antD 组件 */
app.use(router);
app.use(Button);
app.use(Layout);
app.use(Tabs);
app.use(Menu);
/* 为组件提供统一的全局化配置。 */
app.use(ConfigProvider);
app.use(Image);
/* 用来代表用户或事物，支持图片、图标或字符展示。 */
app.use(Avatar);
/* 设置组件之间的间距。 */
app.use(Space);
/* 布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。 */
app.use(Row);
app.use(Col);
/* 一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。 */
app.use(Badge);
app.use(Alert);
/* 展示行列数据 */
app.use(Table);
app.use(Form);
app.use(Input);
app.use(Checkbox);
app.use(DatePicker);
app.use(Select);
app.use(Switch);
app.use(Radio);
app.use(Modal);
for (const i in Icons) {
    app.component(i, Icons[i]);
}
/* 设置全局变量 */
// app.config.globalProperties.$? = ?;
app.mount('#app');
