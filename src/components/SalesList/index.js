import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProductsSale } from "../../asyncActions/products"
import { Link } from 'react-router-dom';
import s from './SalesList.module.css';
import ProductCard from "../ProductCard";


function SalesList() {

    const products = useSelector(store => store.productsList)
    const dispatch = useDispatch()
    console.log(products)


    useEffect(() => {
        dispatch(fetchAllProductsSale())
    }, [dispatch])

    let sortedProducts = products.products

    sortedProducts.sort((a, b) => {
         const discountPercentageA = ((a.price - a.discont_price) / a.price) * 100;
         const discountPercentageB = ((b.price - b.discont_price) / b.price) * 100;
         return discountPercentageB - discountPercentageA; });

    return (
        <ul className={s.SalesList_bar}>
            {sortedProducts.slice(0, 4).map((elem) => (
                <ProductCard img={elem.image} title={elem.title} id = {elem.id} price = {elem.price} discount_price = {elem.discont_price}/>
            ))}
        </ul>
    )

}

export default SalesList