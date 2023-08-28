import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Portfolio from '../views/Portfolio.vue';
import Blogs from '../views/Blogs.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/',name: 'home', component: Home },
  { path: '/about', component: About },
  { path: '/portfolio', component: Portfolio },
  { path: '/blogs', component: Blogs },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
