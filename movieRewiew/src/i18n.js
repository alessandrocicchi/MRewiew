import it from "./it.json"
import en from "./en.json"
import fr from "./fr.json"
import { VueI18n } from "vue-i18n"
import Vue from "vue"

Vue.use(VueI18n)

export default new VueI18n({
    locale: localStorage.getItem("lang") || "it",
    messages: {
        it : it,
        en: en,
        fr: fr
    }
})