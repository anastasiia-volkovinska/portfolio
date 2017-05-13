// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { WOW } from 'wowjs'
import Game from './components/Game.js'
// import name from './components/Game.js'

// import Parallaxify from 'parallaxify'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted: () => {
    new WOW().init()
    window.game = new Game({
        div: '#game',
        width: 600,
        height: 400
    });
    // window.paral = new Parallaxify({
    //     elements: document.getElementsByClassName('.parallax')
    // })
  }
});
