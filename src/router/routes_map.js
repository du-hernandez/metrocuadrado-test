const RoutesMap = {
    public: [
        {
            restricted: true,
            exact: true,
            path: '',
            component: () => <div>Component placeholder</div>
        }
    ],
    private: [
        {
            exact: true,
            path: '',
            component: () => <div>Component placeholder</div>
        }
    ]
}

export { RoutesMap }