import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncFetchExample, decrement, increment } from "../features";

const ReduxSample = () => {
  const dispatch = useDispatch();
  const { count, users } = useSelector((state) => state);
  return (
    <div className="redux-sample">
      Sample counter and async fetch using redux with redux toolkit
      <div className="counter">
        <button onClick={() => dispatch(decrement())}>-1</button>
        <div>{count}</div>
        <button onClick={() => dispatch(increment())}>+1</button>
      </div>
      <div className="users">
        <button onClick={() => dispatch(asyncFetchExample())}>
          Get users (to console log)
        </button>
        <pre>{users && JSON.stringify(users, null, 1)}</pre>
      </div>
      <div>Check redux devtools to see store changes</div>
    </div>
  );
};

export default ReduxSample;
