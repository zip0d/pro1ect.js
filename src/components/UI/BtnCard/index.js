import s from './BtnCard.module.css';
import { useState } from 'react';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addNEwItemAction } from "../../../store/cartReducer"

function BtnCard({title, color, id, name, count, price, discount_price, img, shown}) {

  const dispatch = useDispatch()

    let isShown = 0

    if (shown){
        isShown  = 1
    }

    const [isPressed, setIsPressed] = useState(false);

    const handleClickButton = (event) => {
        event.stopPropagation();
        dispatch(addNEwItemAction({id: id, title: name, price: price, discount_price: discount_price, img: img, count: count}))
        console.log('NO ERROR!')
        setIsPressed(true);
      };
    
  return (
    <button key={id} className={isPressed? s.btn_elem_pressed : s.btn_elem} style={{opacity: isShown}} onClick={handleClickButton}>
        {isPressed? 'Added' : title}
    </button>
  );
}

export default BtnCard;