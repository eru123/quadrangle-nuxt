import { library } from "@fortawesome/fontawesome-svg-core";
// import {  } from "@fortawesome/free-solid-svg-icons";
// import {  } from "@fortawesome/free-regular-svg-icons";
import { 
  faInstagram as fabInstagram, 
  faFacebook as  fabFacebook
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fabInstagram)
library.add(fabFacebook)


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("icon", FontAwesomeIcon)
})