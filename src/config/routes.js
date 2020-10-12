import { News, Home, Sources } from '../components/pages';

//Home route should be last
let routes = [
    {
        key: 'src',
        path: '/news/:id',
        component: News
    },
    {
        key: 'srcs',
        path: '/sources',
        component: Sources
    },
    {
        key: 'hm',
        path: '/',
        component: Home
    }
];

export default routes;
