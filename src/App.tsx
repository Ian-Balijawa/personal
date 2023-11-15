import { useRoutes } from "react-router-dom"
import { ROUTES } from './constants/routes'

import Home from "./pages/Home"
import NotFound from "./pages/404"

export default function App() {
  return useRoutes( [
    {
      path: ROUTES.HOME,
      element: <Home />,
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
