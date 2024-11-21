import { mount } from "enzyme";
import App from "../App";
import { beforeEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

const render = (initialEntries) => <MemoryRouter initialEntries={initialEntries}><App /></MemoryRouter>

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

    describe('when search page is rendered', () => {
        beforeEach(() => {
            sut = render(['/search'])
        });
        it('should match search page snapshot', () => {
            expect(sut).toMatchSnapshot();
        });
    });
})