import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { I_INIT_STATE } from '@/store/interface/router';
import { $setRoute } from '@/store/actions/router';
export interface IReduxProps {
  $route: I_INIT_STATE;
  $setRoute: (route: I_INIT_STATE) => void;
}

export const useReduxRouter = () => {
  const dispatch: Dispatch = useDispatch();
  const $route = useSelector((state: { router: I_INIT_STATE }) => state.router)
  return {
    $route,
    $setRoute: (route: I_INIT_STATE) => dispatch($setRoute(route))
  }
}