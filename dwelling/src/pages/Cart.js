import React from 'react';
import {ContainerStyle, MarginTopFromHeaderStyle} from "../styles/General.styled"
import Header from "../components/Header";
import {
    CartButtonsBlockStyle,
    CartButtonStyle, CartIsEmptyButtonStyle, CartItemEmptyStyle,
    CartItemsBlockStyle,
    CartItemsUlStyle,
    CartTitleStyle,
    CartTotalPriceStyle
} from "../styles/Cart.styled";
import {Link} from "react-router-dom";
import CartItem from "../components/CartItem";
import {useSelector} from "react-redux";
import {getCartItems, getTotalPrice} from "../redux/quantitySlice";

function Cart() {

    let totalPrice = useSelector(getTotalPrice);
    let cartItems = useSelector(getCartItems);

    return (
        <>
            <Header search={false}/>
            <MarginTopFromHeaderStyle>
                <ContainerStyle>

                    <CartTitleStyle>Shopping Cart</CartTitleStyle>
                    {cartItems.length === 0
                        ? (
                            <>
                                <CartItemEmptyStyle>Cart is empty</CartItemEmptyStyle>
                                <CartItemEmptyStyle>
                                    <Link to="/catalog">
                                        <CartIsEmptyButtonStyle variant="outline-info">Back to
                                            Catalog</CartIsEmptyButtonStyle>
                                    </Link>
                                </CartItemEmptyStyle>

                            </>)
                        : (
                            <>
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
                                        <CartButtonStyle variant="outline-info">Back to Catalog</CartButtonStyle>
                                    </Link>
                                    <CartButtonStyle variant="outline-info">Continue</CartButtonStyle>
                                </CartButtonsBlockStyle>
                            </>
                        )}
                </ContainerStyle>
            </MarginTopFromHeaderStyle>
        </>
    );
}

export default Cart;