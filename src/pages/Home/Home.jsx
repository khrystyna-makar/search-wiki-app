import Container from "../../components/Container";
import Autocomplete from "../../components/Autocomplete";

const Home = () => {
    return (
        <Container>
        {({ searchValue, onSearchChange, articles }) => <Autocomplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} />}
        </Container>
    )
}

export default Home;