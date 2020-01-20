import asyncComponent from '../hoc/asyncComponent';

// Lazy loading the routes through HOC
const asyncRoute = (component) => asyncComponent(() => {
    return import(`../mainContent/${component}`)
})

export default asyncRoute;