import { Route, Redirect } from 'react-router-dom'

// Sentinel placeholder
const isLogin = false

const PublicRoutes = ({ component: Component, exact, path, restricted, ...rest }) => {
    return (
        <Route
            exact={exact}
            path={path}
            render={props => (
                (isLogin && restricted) ? <Redirect to='/' /> : <Component {...props} />
            )}
            {...rest}
        />
    )
}

export default PublicRoutes