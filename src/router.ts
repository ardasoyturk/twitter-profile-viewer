import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import HomeComponent from './pages/index.vue';
import UserComponent from './pages/user/[name].vue';

const history = createWebHistory();
const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: HomeComponent,
	},
	{
		path: '/user/:name',
		alias: '/users/:name',
		name: 'User',
		component: UserComponent,
		props: true,
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: '/',
	},
];
const router = createRouter({ history, routes });
export default router;
