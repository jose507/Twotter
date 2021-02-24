import Vue from 'vue'
import App from './App.vue'
import { DatePicker } from 'ant-design-vue';
import { Button } from 'ant-design-vue';
import { Card } from 'ant-design-vue';
import { Layout } from 'ant-design-vue';
import { Comment } from 'ant-design-vue';
import { List } from 'ant-design-vue';
import { Row, Col} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(DatePicker);
Vue.use(Button);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Layout);
Vue.use(Comment);
Vue.use(List);


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
