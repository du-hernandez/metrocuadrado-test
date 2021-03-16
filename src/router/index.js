import React from 'react'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../common/config'
import { PrivateRoutesMap, PublicRoutesMap } from './routes_map'
import { Layout } from '../common/layouts'

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
                <Layout>
                    {[privateRoutesComponents, publicRoutesComponents]}
                </Layout>
            </Switch>
        </Router>
    )
}

export default HandelrRoutes