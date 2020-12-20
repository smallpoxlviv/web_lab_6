import React, {useEffect} from "react";
import {setSuccess} from "../redux/checkoutSlice";
import {useDispatch} from "react-redux";
import {CartButtonStyle} from "../styles/Cart.styled";
import {Link} from "react-router-dom";
import {clearCartItems} from "../redux/cartSlice";
import success from '../images/success.png'
import {
    SuccessButtonStyle,
    SuccessImgStyle,
    SuccessParagraphStyle,
    SuccessStyle,
    SuccessTitleStyle
} from "../styles/Success.styled";

function Success() {

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSuccess(false));
            dispatch(clearCartItems());
        }
    }, [dispatch])

    return (
        <SuccessStyle>
            <SuccessImgStyle src={success}/>
            <SuccessTitleStyle>Success!</SuccessTitleStyle>
            <SuccessParagraphStyle>Your order was sent to processing!</SuccessParagraphStyle>
            <SuccessParagraphStyle>Check your email box for further information or wait for the call!</SuccessParagraphStyle>
            <Link to="/catalog">
                <SuccessButtonStyle variant="outline-info">Go back to
                    Catalog</SuccessButtonStyle>
            </Link>
        </SuccessStyle>
    )
}

export default Success;