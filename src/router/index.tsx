import React, {Fragment, FC } from 'react';
import {Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '@/history';
import { routerMap } from '@/router/routes';
import { IrouterMapInterface } from '@/config/typings';

const RouteWithSubRoutes: FC<any> = (route: any) => (
  <Fragment>
    <Route exact={route.exact}
      path={route.pathname}
        render={props => (
          <route.component {...props} route={{ ...route }} routes={ route.routes }>
            <Fragment>
              {route.routes && route.routes.length > 0 
              ?<CreateRouter routes={route.routes} />
              : null}
              {route.redirect ? <Redirect from={ route.redirect } to={ route.to }></Redirect> : null}
            </Fragment>  
          </route.component>
        )}
    />
  </Fragment>
);

const CreateRouter: FC<{ routes: IrouterMapInterface[] }> = ({ routes }: { routes: IrouterMapInterface[] }) => {
  return (<Switch>
            {routes.map((route: IrouterMapInterface, i: number) =>{
              return (<RouteWithSubRoutes key={i} { ...route }/>)
            })};
          </Switch>);
};

const Component: FC = () => {
    return (
      <Router history={ history }>
        <CreateRouter routes={ routerMap }/>
      </Router>
    );
}
export default Component;