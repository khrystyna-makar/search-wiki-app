import Container from "../../components/Container";
import Autocomplete from "../../components/Autocomplete";
import './styles.scss';

const Home = () => {
    return (
        <div className="home-page-container">
            <img src="./logo.svg" alt="logo" />
            <Container>
                {({ searchValue, onSearchChange, articles }) => <Autocomplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} />}
            </Container>
        </div>

    )
}

export default Home;