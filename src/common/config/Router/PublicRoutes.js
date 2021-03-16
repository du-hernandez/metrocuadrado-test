import { Route, Redirect } from 'react-router-dom'

// Sentinel placeholder
const isLogin = true

const PublicRoutes = ({ component: Component, exact, path, restricted, ...rest }) => {
    return (
        <Route
            exact={exact}
            path={path}
            render={props => (
                (isLogin && restricted) ? <Redirect to='/home' /> : <Component {...props} />
            )}
            {...rest}
        />
    )
}

export default PublicRoutes