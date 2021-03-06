import { Home } from '../scenes'
import Login from '../scenes/Login/Login'
import Register from '../scenes/Register/Register'

const PublicRoutesMap = [
    {
        restricted: true,
        exact: true,
        path: '/',
        component: Login
    },
    {
        restricted: true,
        exact: true,
        path: '/register',
        component: Register
    }
]

const PrivateRoutesMap = [
    {
        exact: true,
        path: '/home',
        component: Home
    },
    {
        exact: true,
        path: '/about',
        component: ()=><label>About</label>
    },
    {
        exact: true,
        path: '/contact_us',
        component: ()=><label>Contact us</label>
    },
]

export { PublicRoutesMap, PrivateRoutesMap }