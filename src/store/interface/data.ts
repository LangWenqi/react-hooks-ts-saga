import { INCREMENT, DECREMENT, SETCREMENT, ASYNCCREMENT } from '@/store/constants/data';

export interface I_INIT_STATE {
  counter: number
}
export interface I_INCREMENT_ACTION {
  type: INCREMENT;
}

export interface I_DECREMENT_ACTION {
    type: DECREMENT;
}
export interface I_SETCREMENT_ACTION {
  type: SETCREMENT;
  count: number
}
export interface I_SETCREMENT_ASYNC_ACTION {
  type: ASYNCCREMENT;
  count: number
}
export type MODIFY_ACTION = I_SETCREMENT_ACTION | I_INCREMENT_ACTION | I_DECREMENT_ACTION;
