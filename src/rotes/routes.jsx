// Layouts
// import HeaderOnly from '../layouts/HeaderOnly';

// Pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Proflie';
// import Upload from '../pages/Upload';
import Search from '../pages/Search';
import Live from '../pages/Live';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/live', component: Live },
    { path: '/profile', component: Profile },
    // { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
