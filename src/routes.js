import LoginPage from './components/LoginPage.vue';
import RegisterPage from './components/RegisterPage.vue';

export const routes = [
  { path: '', component: LoginPage },
  { path: '/register', component: RegisterPage },
];