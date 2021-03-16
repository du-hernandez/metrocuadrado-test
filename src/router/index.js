import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../common/config'
import { RoutesMap } from './routes_map'

const HandelrRoutes = () => {

    const { public, private } = RoutesMap

    const publicRoutes = public.map(route => {
        const { component, exact, path, restricted } = route
        return (
            <PublicRoutes
                component={component}
                exact={exact}
                path={path}
                restricted={restricted}
            />
        )
    })

    const privateRoutes = private.map(route => {
        const { component, exact, path, restricted } = route
        return (
            <PrivateRoutes
                component={component}
                exact={exact}
                path={path}
                restricted={restricted}
            />
        )
    })

    return (
        <Router>
            <Switch>
                {[...publicRoutes, ...privateRoutes]}
            </Switch>
        </Router>
    )
}

export default HandelrRoutes