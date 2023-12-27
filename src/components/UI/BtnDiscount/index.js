import React, { useState } from 'react';
import s from './BtnDiscount.module.css'

const BtnDiscount = ({ handleClick, defaultText, pressedText }) => {
  const [isPressed, setIsPressed] = useState(false);


  

  const handleClickButton = () => {
    handleClick();
    console.log('NO ERROR!')
    setIsPressed(true);
  };

  const errorClickButton = () => {
    setIsPressed(false);
    console.log('ERROR')
    console.log(isPressed)
  }

  return (
    <button className={isPressed && handleClick!=='ERROR' ? s.BtnDiscount_card_pressed : s.BtnDiscount_card} onClick={handleClick!=='ERROR' ? handleClickButton : errorClickButton}>
      {isPressed && handleClick!=='ERROR' ? pressedText : defaultText}
    </button>
  );
};


export default BtnDiscount;