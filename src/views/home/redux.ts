import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { I_INIT_STATE } from '@/store/interface/data';
import { decrement, increment, setcrementAsync } from '@/store/actions/data';
export interface IReduxProps {
  counter: number,
  onIncrement: () => void,
  onDecrement: () => void,
  onSetcrement: (count: number) => void
}

export const useReduxCrement = () => {
  const dispatch: Dispatch = useDispatch();
  const counter = useSelector((state: { data: I_INIT_STATE }) => state.data.counter)
  return {
    counter,
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment()),
    onSetcrement: (count: number) => dispatch(setcrementAsync(count))
  }
}