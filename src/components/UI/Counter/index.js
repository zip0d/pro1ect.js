import s from './Counter.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../../../store/countReducer';

function Counter(){
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    console.log(count)

    return(
<div className={s.CounterLayout}>
    <div className={s.CounterButton} onClick={() => dispatch(incrementCount())}>+</div>
    <div className={s.CounterAmount}>{count}</div>
    <div className={s.CounterButton} onClick={() => dispatch(decrementCount())}>-</div>
</div>

    )
}

export default Counter;