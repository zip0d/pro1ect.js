import CategoriesForHome from "../components/CategoriesForHome"
import DiscountAD from "../components/DiscountAD"
import DiscountCoupon from "../components/DiscountCoupon";
import {SaleForHome} from "../components/SaleForHome";
import { useRef } from "react";



function HomePage(){

    const Ref = useRef();

    function ScrollToRef(){
        Ref.current.scrollIntoView({ behavior: 'smooth' });
    }

    return(
    <div>
                <DiscountAD scrollFunc = {ScrollToRef}/>
                <CategoriesForHome/>
                <DiscountCoupon/>
                <SaleForHome ref = {Ref}/>
    </div>

    )
}

export default HomePage