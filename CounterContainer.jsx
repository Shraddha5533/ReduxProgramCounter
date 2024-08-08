import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterAction";


function CounterContainer() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button className="increment-button" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className="decrement-button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default CounterContainer;
