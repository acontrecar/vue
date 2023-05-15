export default {
    name: 'auth',
    component: () =>
        import(/* webpackChunkName: "auth layour" */ "../layouts/AuthLayout"),
    children: [
        {
            path: "/login",
            name: "login",
            component: () =>
                import(/* webpackChunkName: "login" */ "../view/LoginView")
        },
        {
            path: "/register",
            name: "register",
            component: () =>
                import(/* webpackChunkName: "register" */ "../view/RegisterView")
        },
    ]
}