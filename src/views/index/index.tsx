import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Layout } from 'antd';
import HeaderBar from '@/components/layouts/HearderBar';
import LeftMenuSider from '@/components/layouts/LeftMenuSider';
import IndexStyle from './styles/index.module.scss';
import classNames from 'classnames/bind';
const ClassNames = classNames.bind(IndexStyle);
const { Content } = Layout;
interface Iprops {
  [key: string]: any;
}
const Index: FC<Iprops> = (props: Iprops) => {
  
  return (
    <Layout className={ClassNames('index__Layout__outer')}>
      <HeaderBar/>
      <Layout className={ClassNames('index__Layout__inner')}>
        <LeftMenuSider/>
        <Content>
          { props.children }
        </Content>
      </Layout>
    </Layout>
  );
}

export default Index;