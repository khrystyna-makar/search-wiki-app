import Container from './components/Container';
import Autocomplete from './components/Autocomplete';

const App = () => (
  <Container>
    {({ searchValue, onSearchChange, articles }) => <Autocomplete articles={articles} searchValue={searchValue} onSearchChange={onSearchChange} />}
  </Container>
)

export default App
