import { INCREMENT, DECREMENT, SETCREMENT, ASYNCCREMENT } from '@/store/constants/data';
import { I_INCREMENT_ACTION, I_DECREMENT_ACTION, I_SETCREMENT_ACTION, I_SETCREMENT_ASYNC_ACTION } from '@/store/interface/data';

export const increment = (): I_INCREMENT_ACTION => ({
    type: INCREMENT,
});

export const decrement = (): I_DECREMENT_ACTION => ({
    type: DECREMENT
});

export const setcrement = (count: number): I_SETCREMENT_ACTION => ({
    type: SETCREMENT,
    count
});
export const setcrementAsync = (count: number): I_SETCREMENT_ASYNC_ACTION => ({
    type: ASYNCCREMENT,
    count
});
