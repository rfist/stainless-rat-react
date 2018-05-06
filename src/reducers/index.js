export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function pageCounter (state = { value: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        case 'DECREMENT':
            return { value: state.value - 1 }
        default:
            return state
    }
}