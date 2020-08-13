import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import{ useReduxCrement } from './redux';
interface Iprops {
  [key: string]: any;
}

const Home: FC<Iprops> = (props: Iprops) => {
  const { counter, onIncrement, onDecrement, onSetcrement } = useReduxCrement()
  const [ num, setNum ] = useState<number>(0);
  // const ref = useRef({ refNum: num });

  useEffect(()=>{
    doSetNum();
    console.log(num);
    window.testFuc = () => {};
    return () => {
      window.testFuc = null;
    }
  }, []);

  useEffect(()=>{
    // const { refNum }: { refNum: number } = ref.current;
    // console.log('refNum', refNum);
  }, []);

  const memoNum =  useMemo(():string => ('[' + counter + ']'), [counter]);

  const doSetNum = useCallback(():void => {
    setNum((num: number): number => num + 1);
  }, [num]);
  
  return (
    <div >
      propCouter[{counter}]
      stateNum{memoNum}
      <div onClick={() => onIncrement()}>plus</div>
      <div onClick={() => onDecrement()}>min</div>
      <div onClick={() => onSetcrement(100)}>sagacount</div>
      { props.children }
    </div>
  );
}

export default Home;