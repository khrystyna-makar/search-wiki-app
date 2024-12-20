import { shallow } from 'enzyme';
import Input from '.';
import { expect, describe, it, beforeEach } from 'vitest'

const render = (props) => shallow(<Input {...props} />);

describe('Input component', () => {
    let sut;
    let props;

    describe('without props', () => {
        beforeEach(() => {
            sut = render(props);
        });

        it('should match snapshot', () => {
            expect(sut).toMatchSnapshot()
        })
    });

    describe('with props', () => {
        beforeEach(() => {
            props = {
                placeholder: "input your data",
                name: "search"
            };
            sut = render(props);
        });

        it('should match snapshot', () => {
            expect(sut).toMatchSnapshot()
        })
    });
   
})
