import Home from './../pages/Home/Home';

import Membership from './../pages/Membership/Membership';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/membership', component: Membership },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
