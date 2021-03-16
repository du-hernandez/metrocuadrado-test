import { Route, Redirect } from 'react-router-dom'

// Sentinel placeholder
const isLogin = false

const PublicRoutes = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                (isLogin && restricted) ? <Redirect to='/' /> : <Component {...props} />
            )}
        />
    )
}

export default PublicRoutes