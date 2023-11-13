import { createApp } from "vue";
import App from "./App.vue";
import { install } from "../../dist";

const app = createApp(App);

app
  .use(install, {
    sitekey: "6LeqfE0mAAAAAKMxor5n8YsS4lzUosBAK1-Ht0Ju",
  })
  .mount("#app");
