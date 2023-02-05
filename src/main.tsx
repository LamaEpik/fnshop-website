import { createApp } from 'vue'
import bent from 'bent'

import Shop from './components/shop.vue'
  

import type ShopType from './types/shop'




const getJSON = bent('json')

const init = async () => {
  let lang = window.navigator.language || 'en';
  lang = lang.substr(0, 2);
  let url = '';

  switch (lang) {
    case 'fr':
      url = 'https://fortnite-api.com/v2/shop/br?language=fr';
      break;
    case 'es':
      url = 'https://fortnite-api.com/v2/shop/br?language=es';
      break;
    case 'de':
      url = 'https://fortnite-api.com/v2/shop/br?language=de';
      break;
    default:
      url = 'https://fortnite-api.com/v2/shop/br?language=en';
  }

  const shop: ShopType = await getJSON(url);

  createApp(Shop, { shop: shop.data }).mount('.shop')
}


void init()
