import Home from 'containers/Home';
import RouteProps from 'models/Route';
import Details from 'containers/Details';

const routesData: RouteProps[] = [
    { path: '/', Component: Home },
    { path: '/beer/:id', Component: Details },
];

export default routesData;
