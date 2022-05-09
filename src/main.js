import { createApp } from 'vue';
import App from './App.vue';
import router from '@router';
import naive from '@/plugins/naiveuiComponents';
import '@/public.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';

createApp(App).use(router).use(naive).mount('#app');
