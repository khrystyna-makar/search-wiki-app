import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

const App = () => (
  <RouterProvider router={router} />
)

export default App