import { createApp } from "vue";
import App from "./App.vue";
import { generateRouter } from "./router/Routes";
import "./assets/main.scss"; 
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
 
const APP = createApp(App);
APP
    .use(hljsVuePlugin) 
    .use(generateRouter())
    .mount("#app");
