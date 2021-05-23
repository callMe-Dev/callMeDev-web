import Error from '../components/Error/Error'
import AboutUs from '../views/AboutUs/AboutUs'
import Home from '../views/Home/Home'

export const rootUrl = '/'
export const nosotrosUrl = '/nosotros'

/**
 * @typedef {Object} TRoutes
 * @property {string} url
 * @property {boolean} exact?
 * @property {JSX.Element} component
 */
export const routes = [
  {
    url: rootUrl,
    exact: true,
    component: Home,
  },
  {
    url: nosotrosUrl,
    component: AboutUs,
  },
  {
    url: '/*',
    component: Error,
  },
]
