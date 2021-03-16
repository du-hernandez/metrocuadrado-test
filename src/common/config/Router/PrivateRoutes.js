import { Route, Redirect } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import { loginSelector } from './routerSelector'

const PrivateRoutes = ({ component: Component, exact, path, restricted, ...rest }) => {

    const isLogin = useSelector(loginSelector(), shallowEqual)

    return (
        <Route
            exact={exact}
            path={path}
            render={props => isLogin ? <Component {...props} /> : <Redirect to='/' />}
            {...rest}
        />
    )
}

export default PrivateRoutes;