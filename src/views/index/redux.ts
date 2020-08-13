import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { I_INIT_STATE } from '@/store/interface/data';
import { decrement, increment } from '@/store/actions/data';
export interface IReduxProps {
  counter: number,
  onIncrement: () => void,
  onDecrement: () => void
}

export const useReduxCrement = () => {
  const dispatch: Dispatch = useDispatch();
  const counter = useSelector((state: { data: I_INIT_STATE }) => state.data.counter)
  return {
    counter,
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
  }
}