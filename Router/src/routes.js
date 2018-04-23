import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetail from './components/user/UserDetail.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';

export const routes = [
  { path: '', name: 'home', components: {
    default: Home,
    'header-top': Header
  }},
  {
    path: '/user', components: {
      default: User,
      'header-bottom': Header
    },
    children: [
      { path: '/', component: UserStart, props: true },
      { path: ':id', component: UserDetail, props: true },
      { path: ':id/edit', component: UserEdit, props: true, name: 'userEdit' }
  ]},
  {
    path: '*', redirect: '/'
  }
];
