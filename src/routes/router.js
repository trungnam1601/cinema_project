import config from '../config/config';
// pages
import Home from './../pages/Home/Home';
import Membership from './../pages/Membership/Membership';
import Register from './../pages/Register/Register';
import Login from './../pages/Login/Login';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.membership, component: Membership },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
