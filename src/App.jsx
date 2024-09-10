import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

import Container from './components/Container';
import Autocomplete from './components/Autocomplete';

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

{/* <Container>
{({ searchValue, onSearchChange, articles }) => <Autocomplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} />}
</Container> */}