import { createApp } from "vue";
import App from "./App.vue";
import { generateRouter } from "./router/Routes";
import "./assets/main.scss";

const APP = createApp(App);
APP.use(generateRouter()).mount("#app");
