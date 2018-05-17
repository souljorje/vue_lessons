import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home/Home';
import appStocks from '../components/Stocks/Stocks';
import appPortfolio from '../components/Portfolio/Portfolio';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home,
    },
    {
      path: '/stocks',
      name: 'stocks',
      component: appStocks,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: appPortfolio,
    },
    {
      path: '*', redirect: '/',
    },
  ],
});
