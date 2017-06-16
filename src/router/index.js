import goods from '@/components/goods/goods.vue';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller.vue';
import Hello from '@/components/header/header.vue';

let routes = [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    }
];
export default routes;

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router: VueRouter,
//   template: '<router-view></router-view>'
// });
