import { mount } from "enzyme";
import App from "../App";
import { beforeEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

const render = (initialEntries) => mount(<MemoryRouter initialEntries={initialEntries}><App /></MemoryRouter>);

describe('App component', () => {
    let sut;

    describe('when home page is rendered', () => {
        beforeEach(() => {
            sut = render(['/'])
        });
        it('should match home page snapshot', () => {
            expect(sut).toMatchSnapshot();
        });
    });

    describe('when not found page is rendered', () => {
        beforeEach(() => {
            sut = render(['/hdghgf'])
        });
        it('should match not found page snapshot', () => {
            expect(sut).toMatchSnapshot();
        });
    });
})