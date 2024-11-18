import { mount } from "enzyme";
import Container from '.'
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock('../../hooks', () => ({
    useDebounce: vi.fn(() => ({})),
    useSearch: vi.fn(() => ({articles: []})),
    useSearchForm: vi.fn(() => ({
        searchValue: 'test',
        onSearchChange: vi.fn()
    }))
}));

const render = (props, children) => mount(<Container {...props}>{children}</Container>);

const Children = () => <div>test</div>

describe('Container component', () => {
    let sut;
    let props;
    let children = ({searchValue, onSearchChange, articles}) => <Children searchValue={searchValue} onSearchChange={onSearchChange} articles={articles} />;

    describe('without props', () => {
        beforeEach(() => {
            sut = render(props, children);
        });
        it('should match snapshot', () => {
            expect(sut).toMatchSnapshot();
        });
    });

    describe('when passed custom props', () => {
        beforeEach(() => {
            sut = render(props, children);
        });
        it('should return searchValue in Children component', () => {
            const { searchValue } = sut.find('Children').props();
            expect(searchValue).toBe('test')
        });
    })
})