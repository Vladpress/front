import GoodsList from './src/components/GoodsList/GoodsList';
import GoodsPage from './src/components/GoodsPage/GoodsPage';
import Auth from './src/components/Auth/Auth';
import Default from './src/components/Default/Default';

export const routes = [
    {
        path: '/',
        component: GoodsList,
    }, {
        path: '/auth',
        component: Auth,
    }, {
        path: '/goods/:id',
        component: GoodsPage,
    }, {       
        component: Default,
    }
];
