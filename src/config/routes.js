import { Article, Home, News } from '../components/pages'

//Home route should be last
let routes = [
    {
        key: 'nws',
        path: "/news",
        isExact: true,
        component: News
    },
    {
        key: 'art',
        path: "/news/:id",
        component: Article
    },
    {
        key: 'hm',
        path: "/",
        component: Home
    }
];

export default routes;
