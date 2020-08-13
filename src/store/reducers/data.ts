import { INCREMENT, DECREMENT, SETCREMENT } from '@/store/constants/data';
import { I_INIT_STATE } from '@/store/interface/data';

const INIT_STATE: I_INIT_STATE = {
  counter: 0
}
export default (state: I_INIT_STATE = INIT_STATE, action: any): I_INIT_STATE => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, counter: state.counter + 1 }
      case DECREMENT:
        return { ...state, counter: state.counter - 1 }
      case SETCREMENT:
        return { ...state, counter: action.count }
      default:
        return state;
    }
}