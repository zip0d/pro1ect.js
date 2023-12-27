import { addProductAction } from '../../store/cartReducer';
import BtnCard from '../UI/BtnCard';
import s from './ProductCard.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../..';

function ProductCard({img, title, id, price, discount_price}){

  let isDiscount = false;
  let OldPrice = price;
  let ActualPrice = price;

  if (discount_price!==null){
    isDiscount = true;
    ActualPrice = discount_price;
  }

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



  const discountPercentage = '-' + Math.ceil(((price - discount_price) / price) * 100)+ '%';


    return(

            <div style ={{position: 'relative'}}>
            <li key={id} className={s.ProductCard_card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to={'/product/'+id}>
              <div
                style={{
                  background: `url(${BASE_URL+img}) lightgray 50% / cover no-repeat`,
                  height: '284px',
                  width: '316px',
                  alignSelf: 'stretch',
                  borderBottom: '1px solid var(--grey-divider, #DDD)',
                  position: 'relative'
                }} 
              >
                 {isDiscount&&<div className={s.ProductCard_Sale}>{discountPercentage}</div>}

              </div>

              <div className={s.ProductCard_InfoBox}>
              <p className={s.ProductCard_Name}>{title}</p>
              <div className={s.ProductCard_PriceBox}>

              <div className={s.ProductCard_Price_Actual}>${ActualPrice}</div>
              {isDiscount&&<div className={s.ProductCard_Price_Old}>${OldPrice}</div>}

              </div>

              </div>
              </Link>
              {<BtnCard title = {'Add to cart'} color = 'green'
                 id = {id} name = {title} count = {1}  price = {ActualPrice} discount_price = {OldPrice} img = {img} shown={isHovered} />}
            </li>
            </div>

    )

}

export default ProductCard