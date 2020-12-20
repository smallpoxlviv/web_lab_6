import React from 'react';
import {ContainerStyle, MarginTopFromHeaderStyle} from "../styles/General.styled";
import {ErrorMessage, Form, Formik} from "formik";
import * as yup from "yup";
import {Error} from "../styles/Checkout.styled";
import {
    RegisterButtonStyle,
    RegisterFormStyle,
    RegisterInputBlockStyle,
    RegisterLabelStyle,
    RegisterTitleStyle
} from "../styles/Register.styled";
import {Link} from "react-router-dom";

function Register() {

    function onSubmitRegister(username, email, password, confirmPassword) {
        console.log('on register');
    }

    return (
        <MarginTopFromHeaderStyle>
            <ContainerStyle>

                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={yup.object({
                        username: yup
                            .string()
                            .required('Username is required')
                            .max(44, 'At most forty four characters'),
                        email: yup
                            .string()
                            .required('Email is required')
                            .email('Invalid email address')
                            .max(89, 'At most eighty nine characters'),
                        password: yup
                            .string()
                            .required('Password is required')
                            .min(8, 'At least eight characters')
                            .max(44, 'At most forty four characters'),
                        confirmPassword: yup
                            .string()
                            .required('Password confirmation is required')
                            .oneOf([yup.ref('password')], 'Passwords do not match')
                            .min(8, 'At least eight characters')
                            .max(44, 'At most forty four characters')
                    })}

                    onSubmit={(values) => {
                        onSubmitRegister(values.username, values.email, values.password, values.confirmPassword);
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
                                <RegisterFormStyle>

                                    <RegisterTitleStyle>Register</RegisterTitleStyle>

                                    <RegisterInputBlockStyle>
                                        <RegisterLabelStyle htmlFor="username">Username</RegisterLabelStyle>
                                        <input
                                            type={'text'}
                                            name={'username'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter username'
                                            value={values.username}/>
                                        {touched.username && errors.username
                                        &&
                                        <ErrorMessage name='username'>{error => <Error>{error}</Error>}</ErrorMessage>
                                        }
                                    </RegisterInputBlockStyle>

                                    <RegisterInputBlockStyle>
                                        <RegisterLabelStyle htmlFor="email">Email</RegisterLabelStyle>
                                        <input
                                            type={'text'}
                                            name={'email'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter your email'
                                            value={values.email}/>
                                        {touched.email && errors.email
                                        && <ErrorMessage name='email'>{error => <Error>{error}</Error>}</ErrorMessage>
                                        }
                                    </RegisterInputBlockStyle>

                                    <RegisterInputBlockStyle>
                                        <RegisterLabelStyle htmlFor="password">Password</RegisterLabelStyle>
                                        <input
                                            type={'password'}
                                            name={'password'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter password'
                                            value={values.password}/>
                                        {touched.password && errors.password
                                        &&
                                        <ErrorMessage name='password'>{error => <Error>{error}</Error>}</ErrorMessage>
                                        }
                                    </RegisterInputBlockStyle>

                                    <RegisterInputBlockStyle>
                                        <RegisterLabelStyle htmlFor="confirmPassword">Confirm password</RegisterLabelStyle>
                                        <input
                                            type={'password'}
                                            name={'confirmPassword'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Confirm password'
                                            value={values.confirmPassword}/>
                                        {touched.confirmPassword && errors.confirmPassword
                                        && <ErrorMessage name='confirmPassword'>{error =>
                                            <Error>{error}</Error>}</ErrorMessage>
                                        }
                                    </RegisterInputBlockStyle>

                                    <p>Already a member? <Link to="/login">Sign in</Link></p>

                                    <RegisterButtonStyle
                                        disabled={!isValid && !dirty}
                                        onClick={handleSubmit}
                                        type='submit'
                                        variant="outline-info">
                                        Sign me up</RegisterButtonStyle>

                                </RegisterFormStyle>


                            </Form>)
                    }}

                </Formik>


            </ContainerStyle>
        </MarginTopFromHeaderStyle>
    );
}

export default Register;