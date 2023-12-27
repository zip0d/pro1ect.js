import { Link } from "react-router-dom"
import {useForm} from "react-hook-form"
import s from "./DiscountCoupon.module.css"
import Input from "../UI/Input"
import BtnDiscount from "../UI/BtnDiscount"
import { BASE_URL } from "../.."

function DiscountCoupon(){


    const {
        register,
        reset, 
        watch,
        handleSubmit,
        formState: {errors}
    } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        reset()

        let response = await fetch(`${BASE_URL}/order/send`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data })
        })

        const result = await response.json()
    }

    return (
    <div className={s.DiscountCoupon_container}>
        <div className={s.DiscountCoupon_banner}>
            <h2 className={s.DiscountCoupon_name}>5% off on the first order</h2>
            <div className={s.DiscountCoupon_body}>
                <div className={s.DiscountCoupon_IMG}></div>
                <div className={s.Registration_form}>
                <form>
                    <div style={{positon: 'relative'}}>
                    <Input {...register('email',{
                        required: 'EMail should be filled',
                        pattern:{
                            value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,6}$/,
                            message: 'Invalid email number format'
                        }
                    })}/>
                    {errors.email && <p className={s.warning_text}>{errors.email.message}</p>}
                    </div>

                    <div style={{positon: 'relative'}}>
                    <Input {...register('phone', {
                        required: 'Phone number should be filled',
                        pattern: {
                            value: /^(?:\+7|8) \(\d{3}\) \d{3} \d{2} \d{2}$/,
                            message: 'Invalid phone number format'
                        }
                        
                        })} />
                    {errors.phone && <p className={s.warning_text}>{errors.phone.message}</p>}
                    </div>

                    <div style={{positon: 'relative'}}>
                    <Input {...register('username', {
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
                    </div>
                    {errors.username && <p className={s.warning_text}>{errors.username.message}</p>}
                </form> 
                <BtnDiscount
                                handleClick= {errors.email || errors.phone || errors.username ? 'ERROR' : handleSubmit(onSubmit)}
                                defaultText="Get a discount"
                                pressedText="Request Submitted"
                    />
                </div>
            </div>
        </div>
    </div>
    )
}
export default DiscountCoupon