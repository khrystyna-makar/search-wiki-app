import { useSearch } from "../../hooks";
import { useSearchParams } from "react-router-dom";
import Container from "../../components/Container";
import Autocomplete from "../../components/Autocomplete";

const Search = () => {

    const [params, setParams] = useSearchParams();
    const query = params.get('query');

    const { articles, status } = useSearch(query, 50);

    return (
        <div>
            <Container>
                {({ searchValue, onSearchChange, articles }) => <Autocomplete articles={articles} onSearchChange={onSearchChange} searchValue={searchValue} />}
            </Container>
            {
                (!articles.length && status === 'SUCCESS') ? <h3>No results for query: {query}</h3> :
                    articles.map(article => {
                        return <div key={article.id}>
                            <a href={article.id} target="_blank">{article.label}</a>
                        </div>
                    })}
        </div>
    )
}

export default Search;