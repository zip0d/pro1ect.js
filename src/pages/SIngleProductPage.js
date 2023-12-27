import { useEffect } from "react"
import { useState } from "react"
import { fetchProductById } from "../asyncActions/products"
import { useLocation, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { incrementCount, decrementCount } from '../store/countReducer';
import s from './SingleProductPage.module.css'
import { addNEwItemAction } from "../store/cartReducer"
import { BASE_URL } from ".."


function SingleProductPage(){
    const {id} = useParams()
    const dispatch = useDispatch()
    const location = useLocation()
    const massive = useSelector(store => store.productsItem)
    const count = useSelector(state => state.count);

    useEffect(() => {
        dispatch(fetchProductById(id))
        document.body.scrollIntoView({behavior: "smooth" })
    },[location.pathname])

    const [isPressed, setIsPressed] = useState(false);


    return(

        <div>
                    {massive.map(elem => 
                    <div className={s.ProductLayout}>
                        <div className= {s.ProdImg}
                                style={{
                                background: `url(${BASE_URL+elem.image}) lightgray 50% / contain no-repeat`,
                                alignSelf: 'stretch',
                                borderRadius: 'var(--radius-big, 12px)',
                                }} 
                        >
                        </div>
                    <div className={s.ProductInfoField}>
                        <h3 className={s.ProductName}>{elem.title}</h3>
                        <div className={s.ProductCostField}>
                            <div className={s.ProductCostField_Into}>
                                <div className={s.ProductCost_New}>
                                {'$' + (elem.discont_price == null ? elem.price : elem.discont_price)}
                                </div>
{ elem.discont_price&&                            <div className={s.ProductCost_Old}>
                            {'$' + (elem.price)}
                            </div>}
                            </div>
{ elem.discont_price&&                             <div className={s.DiscountPercent}>
                                {'-' + Math.ceil(((elem.price - elem.discont_price) / elem.price) * 100)+ '%'}
                            </div>}
                        </div>
                        <div className={s.ToCartAddonField}>
                        
<div className={s.CounterLayout}>

    <div className={s.CounterButton} onClick={() => dispatch(decrementCount())}>-</div>
    <div className={s.CounterAmount}>{count}</div>
    <div className={s.CounterButton} onClick={() => dispatch(incrementCount())}>+</div>
</div>
                        
                        <button className={isPressed? s.btn_elem_pressed : s.btn_elem} onClick={function(event){  event.stopPropagation();console.log('NO ERROR!'); setIsPressed(true); console.log('2');
                    dispatch(addNEwItemAction({id: elem.id, title: elem.title, price: elem.price, discount_price: elem.discont_price, img: elem.image, count: count}))}}>
                            {isPressed? 'Added' : 'Add to cart'}
                        </button>    
                        
                        </div>
                        <div className={s.DescriptionField}>
                                <h4 className={s.DescriptionField}>Description</h4>
                                <div className={s.DescriptionImport}>{elem.description}</div>
                        </div>
                    </div>
                    </div>)}
        </div>
    )
}

export default SingleProductPage