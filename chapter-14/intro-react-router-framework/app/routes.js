import { index, route, layout } from '@react-router/dev/routes';

export default [
    layout('layouts/mainlayout.jsx', [
        index('routes/home.jsx'),
        route('/products', 'routes/products.jsx'),
    ]),
];
