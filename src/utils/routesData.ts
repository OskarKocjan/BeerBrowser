import Home from "containers/Home";
import RouteProps from "models/Route";
import Details from "containers/Details";
import ErrorMessage from "components/ErrorMessage";

const routesData: RouteProps[] = [
    { path: "/", Component: Home, key: 1 },
    { path: "/beer/:id", Component: Details, key: 2 },
    { path: "*", Component: ErrorMessage, key: 3 },
    { path: "/home", Component: Home, key: 4 },
];

export default routesData;
