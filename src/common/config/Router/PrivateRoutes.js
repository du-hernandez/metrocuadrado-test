import { Route, Redirect } from 'react-router-dom'

// Sentinel placeholder
const isLogin = false

const PrivateRoutes = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                isLogin ? <Component {...props} /> : <Redirect to='/' />
            )}
        />
    )
}

export default PrivateRoutes;