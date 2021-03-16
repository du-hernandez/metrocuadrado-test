import { Route, Redirect } from 'react-router-dom'

// Sentinel placeholder
const isLogin = true

const PrivateRoutes = ({ component: Component, exact, path, restricted, ...rest }) => {
    return (
        <Route
            exact={exact}
            path={path}
            render={props => (
                isLogin ? <Component {...props} /> : <Redirect to='/' />
            )}
            {...rest}
        />
    )
}

export default PrivateRoutes;