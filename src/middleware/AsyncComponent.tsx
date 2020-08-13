import React, {  FC, useState, useEffect } from "react";
import { Icomponent } from '@/config/typings';
import { useReduxRouter } from '@/middleware/AsyncComponentRedux';
import history from '@/history';

interface Iprops  {
  [key: string]: any;
};

// hooks模式
export default function asyncComponent(importComponent: () => Promise<Icomponent>, loading:boolean = true): FC<Iprops> {
  const AsyncComponent: FC<Iprops> = (props: Iprops) => {
    const { $route, $setRoute } = useReduxRouter();
    const [C, setC] = useState<FC<Iprops> | null>(null);
  
    useEffect(() => {
      initFuc();
    }, []);

    useEffect(() => {
      if(C) {
        handleRouteAfterEach();
      }
    }, [C]);

    const initFuc = async () => {
      await handleRouteBeforeEach();
      await handleBeforeRouteEnter();
      const { default: component }: { default: FC<Iprops> } = await importComponent();
      setCurrentRoute();
      // 函数组件设置到 useState Hooks 之后会变成函数组件的返回值，所以包装一层（被react-redux的高阶组件connect包裹的组件可以不需要）
      setC(() => component);
    }
    // routerConfig中路由进入之前钩子
    const handleBeforeRouteEnter = (): Promise<any> => {
      const { route } = props;
      const { beforeRouteEnter } = route;
      return new Promise(next => {
        if ( !beforeRouteEnter ) {
          next(route);
          return;
        }
        const from = $route.routeConfig;
        const to = route;
        beforeRouteEnter({ next, from, to });
      });
    }
    // 每个页面中路由进入之前钩子
    const handleRouteBeforeEach = (): Promise<any> => {
      const { route } = props;
      const { routerBeforeEach } = history;
      return new Promise(next => {
        if ( !routerBeforeEach ) {
          next($route);
          return;
        }
        const from = $route.routeConfig;
        const to = route;
        routerBeforeEach({ next, from, to });
      });
    }
    // 每个页面中路由进入之后钩子
    const handleRouteAfterEach = (): void => {
      const { route } = props;
      const { routerAfterEach } = history;
      if ( !routerAfterEach ) return;
      const from = $route.routeConfig;
      const to = route;
      routerAfterEach({ from, to });
    }

    const setCurrentRoute = (): void => {
      const { match, route } = props;
      $setRoute({
        fullPathname: window.location.href,
        pathname: history.location.pathname,
        query: history.getQuery(),
        params: match.params,
        routeConfig: route,
        state: history.location.state
      });
    } 

    return (C ? <C {...props}/> : null); 
  }
  return AsyncComponent;
}

