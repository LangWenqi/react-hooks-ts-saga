import React, { FC, useEffect, useMemo } from 'react';
import { Menu, Breadcrumb, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import { siderWidth, theme } from '@/config/grid';
import { mapMenu } from '@/config/menuConfig';
import { useReduxRouter } from '@/middleware/AsyncComponentRedux';
// scss cssModules使用方法
import IndexStyle from './styles/index.module.scss';
import classNames from 'classnames/bind';
const ClassNames = classNames.bind(IndexStyle);
// scss 普通使用方法
// import IndexStyle from './styles/index.scss';
// import ClassNames from 'classnames';
// 放到className中
// ClassNames('container', { 'wrapper': true })

const { Sider } = Layout;
const { SubMenu } = Menu;


interface Iprops {
  [key: string]: any
}
const LeftMenuSider: FC = () => {
  const { $route } = useReduxRouter();
  return (
      <div style={{ width: siderWidth }} className={ClassNames('sider__ant')}>
        <Sider width={ siderWidth } className={ClassNames('sider__ant__inner')}>
          <Menu
            mode="inline"
            selectedKeys={ $route.routeConfig.select ? [$route.routeConfig.select] : [] }
            openKeys={ $route.routeConfig.module ? [$route.routeConfig.module] : [] }
            style={{ height: '100%' }}
            theme = {theme.dark}
          >
            {mapMenu.map((menuItem) => (
              <SubMenu
                key={ menuItem.module }
                title={
                  <span>
                    <UserOutlined/>
                    {menuItem.name}
                  </span>
                }
              >
                {menuItem.routes && menuItem.routes.length > 0 && menuItem.routes.map((menuChildItem, menuChildIndex) => (
                  <Menu.Item key={menuChildItem.select}>{menuChildItem.name}</Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </Sider>
      </div>
     
  )
}

export default LeftMenuSider;