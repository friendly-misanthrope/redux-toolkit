import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(increment());
  }

  const decrement = () => {
    dispatch(decrement());
  }

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </section>
  );
}

export default Counter;