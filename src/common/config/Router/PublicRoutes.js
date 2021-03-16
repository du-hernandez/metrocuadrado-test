import { Route, Redirect } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import { loginSelector } from './routerSelector'

const PublicRoutes = ({ component: Component, exact, path, restricted, ...rest }) => {

    const isLogin = useSelector(loginSelector(), shallowEqual)

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