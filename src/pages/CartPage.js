import { useDispatch, useSelector} from "react-redux";
import { useState } from "react";
import { BASE_URL } from "..";
import { changeCountAction, clearCartAction } from "../store/cartReducer";
import s from './CartPage.module.css';
import X from '../media/x_mark.svg';
import Xpop from '../media/Xpop.svg';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";

function CartPage(){

    const dispatch = useDispatch()
    const cartList = useSelector(store => store.cartList)
    const [isPopUp, setIsPopUp] = useState(false);

    const countAction = (id, count) => dispatch(changeCountAction({id,count}))
    const clearAction = () => dispatch(clearCartAction())
    const totalCount = cartList.reduce((total, item) => total + item.count, 0);
    const totalPrice = cartList.reduce((total, item) => total + item.price*item.count, 0);
    let isGap = '32px'
    if (totalCount === 0){
        isGap = '0px'
    }

    const {
        register,
        reset, 
        watch,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit = async (data) => {

        let response = await fetch(`${BASE_URL}/order/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data })
        })

        const result = await response.json()

        console.log(data);
        reset();
        console.log('NO ERROR!');
        result && setIsPressed(true);
        result && setIsPopUp(true)
    }

    function ClosePopUp(){
        setIsPopUp(false);
        setIsPressed(false);
    }



    const [isPressed, setIsPressed] = useState(false);

    const errorClickButton = () => {
      setIsPressed(false);
      console.log('ERROR')
      console.log(isPressed)
    }

    return(
        <div className={s.CartContainer}>



{ isPopUp && <div className={s.popupContainer} id="popupContainer">
    <div className={s.popupContent} id="popupContent">
        
        <div className={s.popupTextField}>
            <h2 className={s.popupName}>Congratulations!</h2>
            <p className={s.popupInfo}>Your order has been successfully placed on the website.
            <br></br>
            <br></br>
            A manager will contact you shortly to confirm your order.</p>
        </div>
        <div className={s.closeButton} id="closeButton" onClick={function(event){ClosePopUp(); clearAction()}}><img alt = 'Xpop' src={Xpop}/></div>
    </div>
    </div>}



            <header className= {`${s.Head}`}>
                <h2 className= {`${s.Head_Title}`}>Shopping cart</h2>
                <div className= {`${s.Btn_Area}`}>
                    <div className= {`${s.Head_Line}`}></div>
                    <Link className= {`${s.Nav_Button}`} to="/products/all">Back to the store</Link>
                </div>
            </header>
            <div className={s.CartLayout} style = {{gap:isGap}} >

                <div className={s.CartList}>
                    {cartList.map(elem => 
                        <div className={s.CartItem} key={elem.id}>
                                <div 
                                style={{
                                    background: `url(${BASE_URL+elem.img}) lightgray 50% / contain no-repeat`,
                                    alignSelf: 'stretch',
                                    border: '1px solid var(--grey-divider, #DDD)',
                                    borderRadius: 'var(--radius-big, 12px) 0px 0px var(--radius-big, 12px);',
                                    width: '200px',
                                    height: '180px'
                                    }} 
                                >
                                </div>
                                <div className={s.CartItem_Info}>
                                    <div className={s.CartItem_NameField}>
                                <p className={s.CartItem_Name}>{elem.title}</p> <button style = {{backgroundColor: '#ffffff', border: 'none'}} onClick={() => countAction(elem.id, 'delete')}><img alt = 'X' src={X}/></button>
                                    </div>
                                <div className={s.InfoField}>
                                    <div className={s.CounterLayout}>
                                            <button className={s.CounterButton} onClick={() => countAction(elem.id, -1)}>-</button>
                                            <h3 className={s.CounterAmount}>{elem.count}</h3>
                                            <button className={s.CounterButton} onClick={() => countAction(elem.id, 1)}>+</button>
                                    </div>
                                    <div className={s.PriceField}>
                                        <p className={s.ProductCost_New}>${elem.price}</p>
                                        {(elem.price!==elem.discount_price) && (elem.discount_price) && <p className={s.ProductCost_Old}>${elem.discount_price}</p>}
                                    </div>
                                </div>
                                </div>
                        </div>
                    )}
            </div>
   
            {totalCount === 0 ?
            <div className={s.NoCartLayout}>
                <p>Looks like you have no items in your basket currently.</p>
                <Link to="/products/all" className={s.NoCart_button}>Continue Shopping</Link>
            </div> :
            <div className={s.Order_container}>
                <div className={s.Order_details}>
                    <h3 className={s.Order_name}>Order details</h3>
                    <div className={s.Order_detailsInfo}>
                        <p className={s.Total}>{totalCount} {totalCount === 1 ? 'item' : 'items'}</p>
                        <div className={s.Order_priceBar}>
                        <p className={s.Total}>Total</p>
                        <h2 className={s.Order_price}>${totalPrice.toFixed(2)}</h2>
                        </div>
                    </div>
                </div>
                <form className={s.Order_form}>
                    <div className={s.InputsBar}>

                        <input className={s.SingleInput} placeholder='Name' {...register('username', {
                        required: 'Username should be filled',
                        minLength: {
                            value: 3,
                            message: 'Username should have at least 3 characters'
                        },
                        maxLength: {
                            value: 20,
                            message: 'Username should not exceed 20 characters'
                        }
                        })} />
                    {errors.username && <p className={s.warning_text}>{errors.username.message}</p>}

                    <input className={s.SingleInput} placeholder='Phone number' {...register('phone', {
                        required: 'Phone number should be filled',
                        pattern: {
                            value: /^(?:\+7|8) \(\d{3}\) \d{3} \d{2} \d{2}$/,
                            message: 'Invalid phone number format'
                        }
                        
                        })} />
                    {errors.phone && <p className={s.warning_text}>{errors.phone.message}</p>}

                    <input className={s.SingleInput} placeholder='Email' {...register('email',{
                        required: 'EMail should be filled',
                        pattern:{
                            value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
                            message: 'Invalid email number format'
                        }
                    })}/>
                    {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}

                    </div>
                </form>
                <button className={isPressed ? s.Order_buttonPressed : s.Order_button}
                 onClick={ errors.email || errors.phone || errors.username ? errorClickButton : handleSubmit(onSubmit)
                }>
                    {isPressed ? 'The Order is Placed' : 'Order'}
                </button>
            </div>}
            
            </div>
        </div>
    )
}

export default CartPage