import React, {useEffect} from "react";
import * as yup from 'yup';
import {ErrorMessage, Form, Formik} from "formik";
import {
    AddressInputBlockStyle,
    CheckoutFormStyle,
    CheckoutRowStyle,
    Error,
    InputBlockStyle,
    InputStyle,
    LabelStyle
} from "../styles/Checkout.styled";
import {CartButtonsBlockStyle, CartButtonStyle} from "../styles/Cart.styled";
import {setCheckout, setSuccess} from "../redux/checkoutSlice";
import {useDispatch} from "react-redux";

function Checkout() {

    // const phoneRegExAmerica = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const phoneRegExUkraine = /^\+?3?8?0?([\s-]?\d{2}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2})$/

    const dispatch = useDispatch();

    function onCheckoutBackClick() {
        dispatch(setCheckout(false));
    }

    useEffect(() => {
        return () => {
            dispatch(setCheckout(false));
        }
    }, [dispatch])

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: ''
            }}
            validationSchema={yup.object({
                firstName: yup
                    .string()
                    .required('First name is required')
                    .min(3, 'At least three characters')
                    .max(20, 'At most twenty characters'),
                lastName: yup
                    .string()
                    .required('Last name is required')
                    .min(2, 'At least two characters')
                    .max(20, 'At most twenty characters'),
                email: yup
                    .string()
                    .email('Invalid email address'),
                phone: yup
                    .string()
                    .required('Phone number is required')
                    .matches(phoneRegExUkraine, 'Invalid phone number'),
                address: yup
                    .string()
                    .required('Address is required')
                    .min(20, 'At least twenty characters')
            })}

            onSubmit={(values) => {
                dispatch(setSuccess(true))
                console.log(values);
            }}
        >

            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isValid, handleSubmit, dirty
              }) => {
                return (
                    <Form>
                        <CheckoutFormStyle>

                            <CheckoutRowStyle>
                                <InputBlockStyle>
                                    <LabelStyle htmlFor="firstName">First Name</LabelStyle>
                                    <InputStyle
                                        type={'text'}
                                        name={'firstName'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Enter your first name'
                                        value={values.firstName}/>
                                    {touched.firstName && errors.firstName
                                    && <ErrorMessage name='firstName'>{error => <Error>{error}</Error>}</ErrorMessage>
                                    }
                                </InputBlockStyle>
                                <InputBlockStyle>
                                    <LabelStyle htmlFor="lastName">Last Name</LabelStyle>
                                    <InputStyle
                                        type={'text'}
                                        name={'lastName'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Enter your last name'
                                        value={values.lastName}/>
                                    {touched.lastName && errors.lastName
                                    && <ErrorMessage name='lastName'>{error => <Error>{error}</Error>}</ErrorMessage>
                                    }
                                </InputBlockStyle>
                            </CheckoutRowStyle>

                            <CheckoutRowStyle>
                                <InputBlockStyle>
                                    <LabelStyle htmlFor="email">Email</LabelStyle>
                                    <InputStyle
                                        type={'text'}
                                        name={'email'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Enter your email'
                                        value={values.email}/>
                                    {touched.email && errors.email
                                    && <ErrorMessage name='email'>{error => <Error>{error}</Error>}</ErrorMessage>
                                    }
                                </InputBlockStyle>
                                <InputBlockStyle>
                                    <LabelStyle htmlFor="phone">Phone</LabelStyle>
                                    <InputStyle
                                        type={'text'}
                                        name={'phone'}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Enter your phone'
                                        value={values.phone}/>
                                    {touched.phone && errors.phone
                                    && <ErrorMessage name='phone'>{error => <Error>{error}</Error>}</ErrorMessage>
                                    }
                                </InputBlockStyle>
                            </CheckoutRowStyle>

                            <AddressInputBlockStyle>
                                <LabelStyle htmlFor="address">Address</LabelStyle>
                                <InputStyle
                                    type={'text'}
                                    name={'address'}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Enter your address'
                                    value={values.address}/>
                                {touched.address && errors.address
                                && <ErrorMessage name='address'>{error => <Error>{error}</Error>}</ErrorMessage>
                                }
                            </AddressInputBlockStyle>
                        </CheckoutFormStyle>

                        <CartButtonsBlockStyle>
                            <CartButtonStyle
                                onClick={onCheckoutBackClick}
                                variant="outline-info">
                                Go Back</CartButtonStyle>
                            <CartButtonStyle
                                disabled={!isValid && !dirty}
                                onClick={handleSubmit}
                                type='submit'
                                variant="outline-info">
                                Continue</CartButtonStyle>
                        </CartButtonsBlockStyle>

                    </Form>)
            }}

        </Formik>


    )
        ;
}

export default Checkout;