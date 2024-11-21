import { renderHook, act } from '@testing-library/react-hooks'
import { useDebounce, useSearchForm, useSearch } from '../hooks'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import moxios from 'moxios';
import { waitFor } from '@testing-library/react';

describe('useSearchForm hook', () => {
    let event1;
    let event2;

    beforeEach(() => {
        event1 = {
            target: {
                value: 'data1'
            }
        };
        event2 = {
            target: {
                value: 'data2'
            }
        };
    });

    it('should update searchValue', () => {
        const { result } = renderHook(() => useSearchForm());

        act(() => result.current.onSearchChange(event1));

        expect(result.current.searchValue).toBe('data1');

        act(() => result.current.onSearchChange(event2));

        expect(result.current.searchValue).toBe('data2');
    })
});

describe('useDebounce hook', () => {
    it('it should return the same value after long delay', () => {
        const expectedResult = 'text';
        const { result } = renderHook(() => useDebounce(expectedResult, 500));

        expect(result.current).toBe(expectedResult);

        vi.useFakeTimers();
        vi.advanceTimersByTime(510);

        expect(result.current).toBe(expectedResult);
    });

    it('should return the same value before timer was reached', () => {
        const value1 = 'text1';
        const value2 = 'text2';

        const { result, rerender } = renderHook(({value, delay}) => useDebounce(value, delay), {initialProps: {value: value1, delay: 500}});

        expect(result.current).toBe(value1);

        vi.useFakeTimers();
        vi.advanceTimersByTime(490);

        rerender({value: value2});

        expect(result.current).toBe(value1);

        vi.runAllTimers();

        expect(result.current).toBe(value2);
    });
});

describe('useSearch hook', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('should return init data - empty articles', () => {
        const { result } = renderHook(() => useSearch());

        expect(result.current.articles).toEqual([]);
    });
    it('should return init data - IDLE status', () => {
        const { result } = renderHook(() => useSearch());

        expect(result.current.status).toBe('IDLE');
    });

    it('should have PENDING status when call is started', () => {
        const { result } = renderHook(() => useSearch('elon'));

        expect(result.current.status).toBe('PENDING');
    });

    // it('should have SUCCESS status when request is executed', async () => {
    //     moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10', {
    //         status: 200,
    //         responseText: 'elon'
    //     });

    //     const { result, waitForNextUpdate } = renderHook(() => useSearch('elon'));
        
    //     await waitForNextUpdate();
    //     expect(result.current.status).toBe('SUCCESS');
    // });

    // it('should have articles when request is executed', async () => {
    //     moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10', {
    //         status: 200,
    //         responseText:['elon ',['Elon Musk'],[''],['link']]
    //     });

    //     const { result, waitForNextUpdate } = renderHook(() => useSearch('elon'));

    //     await waitForNextUpdate();

    //     expect(result.current.articles).toEqual([{id: 'link', label: 'Elon Musk'}]);
    // });

    // it('should have ERROR status when request was failed', async () => {
    //     moxios.stubRequest('https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=elon&limit=10', {
    //         status: 500,
    //         responseText:[]
    //     });

    //     const { result, waitForNextUpdate} = renderHook(() => useSearch('elon'));

    //     await waitForNextUpdate();

    //     expect(result.current.status).toBe('ERROR');
    // });
})