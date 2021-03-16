import { Home } from '../scenes'

const PublicRoutesMap = [
    {
        restricted: true,
        exact: true,
        path: '/',
        component: () => <div>Component placeholder</div>
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
        path: '/productDetail',
        component: () => <div>Component placeholder</div>
    }
]

export { PublicRoutesMap, PrivateRoutesMap }