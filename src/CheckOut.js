import React from 'react'
import './CheckOut.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function CheckOut() {
    const [{basket,user},dispatch]=useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
            alt=""  
            className="checkout_ad"
            />
                <div>
                    <h3>{user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map((item)=>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                    
                </div>
            </div>

            <div className="checkout__right">
               <Subtotal/>
            </div>
        </div>
    )
}

export default CheckOut
