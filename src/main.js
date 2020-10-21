import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


let ghpages = require('gh-pages');
 
ghpages.publish('dist', function(err) {
    console.log(err);
});