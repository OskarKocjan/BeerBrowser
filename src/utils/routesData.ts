import Home from 'containers/Home';
import RouteProps from 'models/Route';
import Details from 'containers/Details';

const routesData: RouteProps[] = [
    { path: '/', Component: Home, key: 1 },
    { path: '/beer/:id', Component: Details, key: 2 },
];

export default routesData;
