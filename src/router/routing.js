import Layout from '../components/layout';
import ErrorPage from '../pages/error';
import MainPage from '../pages/home';
import SearchPage from '../pages/search';
import WatchPage from '../pages/watch';

const { createBrowserRouter } = require('react-router-dom');

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <MainPage /> },
            { path: '/search/:searchString', element: <SearchPage /> },
            { path: '/watch/:videoId', element: <WatchPage /> },
        ],
        errorElement: <ErrorPage />,
    },
]);

export default router;
