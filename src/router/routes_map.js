const RoutesMap = {
    publicRoutes: [
        {
            restricted: true,
            exact: true,
            path: '',
            component: () => <div>Component placeholder</div>
        }
    ],
    privateRoutes: [
        {
            exact: true,
            path: '',
            component: () => <div>Component placeholder</div>
        }
    ]
}

export { RoutesMap }