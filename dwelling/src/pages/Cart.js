import React, {useEffect} from 'react';
import {ContainerStyle, MarginTopFromHeaderStyle} from "../styles/General.styled"
import Header from "../components/Header";
import {
    CartButtonsBlockStyle,
    CartButtonStyle,
    CartIsEmptyButtonStyle,
    CartItemEmptyStyle,
    CartItemsBlockStyle,
    CartItemsUlStyle,
    CartTitleStyle,
    CartTotalPriceStyle
} from "../styles/Cart.styled";
import {Link} from "react-router-dom";
import CartItem from "../components/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {getCartItems, getTotalPrice} from "../redux/cartSlice";
import {getCheckout, getSuccess, setCheckout} from "../redux/checkoutSlice";
import Checkout from "../components/Checkout";
import Success from "../components/Success";

function Cart() {

    useEffect(()=>{
        console.log()
    })
    let totalPrice = useSelector(getTotalPrice);
    let cartItems = useSelector(getCartItems);
    let checkout = useSelector(getCheckout);
    let success = useSelector(getSuccess);

    const dispatch = useDispatch();

    function onCartContinueClick() {
        dispatch(setCheckout(true));
    }

    switch (true) {
        case success:
            return (
                <>
                    <Header search={false}/>
                    <MarginTopFromHeaderStyle>
                        <ContainerStyle>

                            <Success/>

                        </ContainerStyle>
                    </MarginTopFromHeaderStyle>
                </>
            );
        case checkout:
            return (
                <>
                    <Header search={false}/>
                    <MarginTopFromHeaderStyle>
                        <ContainerStyle>

                            <CartTitleStyle>Checkout</CartTitleStyle>
                            <Checkout/>

                        </ContainerStyle>
                    </MarginTopFromHeaderStyle>
                </>
            );
        case (cartItems.length === 0):
            return (
                <>
                    <Header search={false}/>
                    <MarginTopFromHeaderStyle>
                        <ContainerStyle>

                            <CartTitleStyle>Shopping Cart</CartTitleStyle>

                            <CartItemEmptyStyle>Cart is empty</CartItemEmptyStyle>
                            <CartItemEmptyStyle>
                                <Link to="/catalog">
                                    <CartIsEmptyButtonStyle variant="outline-info">Back to
                                        Catalog</CartIsEmptyButtonStyle>
                                </Link>
                            </CartItemEmptyStyle>

                        </ContainerStyle>
                    </MarginTopFromHeaderStyle>
                </>
            );
        default:
            return (
                <>
                    <Header search={false}/>
                    <MarginTopFromHeaderStyle>
                        <ContainerStyle>

                            <CartTitleStyle>Shopping Cart</CartTitleStyle>
                            <CartItemsBlockStyle>
                                <CartItemsUlStyle>
                                    {cartItems.map((item) => (
                                        <CartItem key={item.id} item={item}/>
                                    ))}

                                </CartItemsUlStyle>
                                <CartTotalPriceStyle>Total price: {totalPrice}$</CartTotalPriceStyle>
                            </CartItemsBlockStyle>

                            <CartButtonsBlockStyle>
                                <Link to="/catalog">
                                    <CartButtonStyle variant="outline-info">Back to
                                        Catalog</CartButtonStyle>
                                </Link>
                                <CartButtonStyle onClick={onCartContinueClick}
                                                 variant="outline-info">Continue</CartButtonStyle>
                            </CartButtonsBlockStyle>


                        </ContainerStyle>
                    </MarginTopFromHeaderStyle>
                </>
            );
    }
}

export default Cart;