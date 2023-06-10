import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: '0f87cabd-0e22-4d77-becc-f69e01791189',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

Vue.use(YmapPlugin, settings);
