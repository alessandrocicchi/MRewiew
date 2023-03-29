import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import { createI18n } from 'vue-i18n';

const lang = localStorage.getItem('lang') || "en";

const i18n = createI18n({
    locale: lang,
    messages: {
        it:{
            DataDiRilascio: "Data di rilascio",
            Visualizzazioni: "Visualizzazioni",
            MediaVoti : "Media Voti",
            LinguaOriginale : "Lingua originale",
            Voti : "Voti",
            TornaIndietro : "TORNA INDIETRO",
            Cerca : "Cerca"
        },
        fr:{
            DataDiRilascio : "Date de sortie",
            Visualizzazioni : "Affichage",
            MediaVoti : "Moyenne des notes",
            LinguaOriginale : "Langue originale",
            Voti : "Audimat",
            TornaIndietro : "REVIENS",
            Cerca : "Rechercher"
        },
        en:{
            DataDiRilascio : "Release Date",
            Visualizzazioni : "Visual",
            MediaVoti : "Vote Average",
            LinguaOriginale : "Original language",
            Voti : "Votes",
            TornaIndietro : "COME BACK",
            Cerca : "Search"
        }
    }
})


axios.defaults.headers['Accept-Language'] = lang;

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(i18n)

app.mount('#app')
