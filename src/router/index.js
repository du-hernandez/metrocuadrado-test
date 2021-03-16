import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../common/config'
import { PrivateRoutesMap, PublicRoutesMap } from './routes_map'

const HandelrRoutes = () => {


    const publicRoutesComponents = PublicRoutesMap.map(route => {
        const { component, exact, path, restricted } = route
        return (
            <PublicRoutes
                key={path}
                component={component}
                exact={exact}
                path={path}
                restricted={restricted}
            />
        )
    })

    const privateRoutesComponents = PrivateRoutesMap.map(route => {
        const { component, exact, path, restricted } = route
        return (
            <PrivateRoutes
                key={path}
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
                {[...publicRoutesComponents, ...privateRoutesComponents]}
            </Switch>
        </Router>
    )
}

export default HandelrRoutes