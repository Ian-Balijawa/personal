import { lazy } from 'react'
import { useRoutes } from "react-router-dom"
import { ROUTES } from './constants/routes'
import { Loadable } from './components/Loadable'

const Home = Loadable( lazy( () => import( "./pages/Home" ) ) )
const NotFound = Loadable( lazy( () => import( "./pages/404" ) ) )
const Blog = Loadable( lazy( () => import( "./pages/Blog" ) ) )
const Estimator = Loadable( lazy( () => import( "./pages/Estimator" ) ) )

export default function App() {
  return useRoutes( [
    {
      path: ROUTES.HOME,
      element: <Home />,
    },
    {
      path: ROUTES.BLOG,
      element: <Blog />,
    },
    {
      path: ROUTES.ESTIMATOR,
      element: <Estimator />,
    },
    {
      path: ROUTES.ALL,
      element: <NotFound />,
    },
    {
      path: ROUTES.NOT_FOUND,
      element: <NotFound />,
    }
  ] )
}
