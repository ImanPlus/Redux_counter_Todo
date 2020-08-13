import React from "react";
import {useSelector, useDispatch} from "react-redux";

function CounterHook() {
  const count = useSelector((state) => state.counterRDS.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter using <span style={{fontWeight: 'bold'}}>HOOK</span></h1>
      <h2>Counter: {count}</h2>
      <button onClick={(() => dispatch({type: "INCREMENT"}))}>INCREMENT</button>
      <button onClick={(() => dispatch({type: "DECREMENT"}))}>DECREMENT</button>
    </div>
  )
}

export default CounterHook
