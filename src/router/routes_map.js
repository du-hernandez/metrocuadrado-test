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
        component: () => <div>Component placeholder rarito</div>
    },
    {
        exact: true,
        path: '/productDetail',
        component: () => <div>Component placeholder</div>
    }
]

export { PublicRoutesMap, PrivateRoutesMap }