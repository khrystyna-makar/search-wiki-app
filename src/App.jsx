import {
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/search" element={<Search />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default App