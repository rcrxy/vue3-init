import "normalize.css/normalize.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import router from "./router";

const app = createApp(App);

// 引入全部element-plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
   app.component(key, component);
}

app.use(router);
app.use(createPinia());

app.mount("#app");
