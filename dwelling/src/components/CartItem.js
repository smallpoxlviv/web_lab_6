import React from 'react';
import logo from '../images/logo.ico';
import {
    CartItemButtonStyle,
    CartItemCounterStyle,
    CartItemCountNumStyle,
    CartItemImgTitleWrapStyle,
    CartItemLiStyle, CartItemPriceDeleteBlockStyle,
    CartItemPriceStyle,
    CartItemTitleStyle
} from "../styles/CartItem.styled";
import {useDispatch} from "react-redux";
import {decrementQuantity, deleteItemFromCart, incrementQuantity} from "../redux/quantitySlice";

function CartItem({item}) {
    const dispatch = useDispatch();

    function onMinusClick() {
        if (item.quantity > 1) {
            dispatch(decrementQuantity(item.id));
        }
    }

    function onPlusClick() {
        dispatch(incrementQuantity(item.id));
    }

    function onDeleteClick() {
        dispatch(deleteItemFromCart(item.id));
    }

    return (
        <CartItemLiStyle>
            <CartItemImgTitleWrapStyle>
                <img src={logo} height="100%" alt='dwelling'/>
                <CartItemTitleStyle>{item.title}</CartItemTitleStyle>
            </CartItemImgTitleWrapStyle>

            <CartItemCounterStyle>
                <CartItemButtonStyle onClick={onMinusClick} variant="outline-info">-</CartItemButtonStyle>
                <CartItemCountNumStyle>{item.quantity}</CartItemCountNumStyle>
                <CartItemButtonStyle onClick={onPlusClick} variant="outline-info">+</CartItemButtonStyle>
            </CartItemCounterStyle>

            <CartItemPriceDeleteBlockStyle>
                <CartItemPriceStyle>{item.price_in_USD}$</CartItemPriceStyle>
                <CartItemButtonStyle onClick={onDeleteClick} variant="outline-info">X</CartItemButtonStyle>
            </CartItemPriceDeleteBlockStyle>
        </CartItemLiStyle>
    );
}

export default CartItem;