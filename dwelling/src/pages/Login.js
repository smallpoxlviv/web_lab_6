import React from 'react';
import {ContainerStyle, MarginTopFromHeaderStyle} from "../styles/General.styled";
import * as yup from "yup";
import {ErrorMessage, Form, Formik} from "formik";
import {Error} from "../styles/Checkout.styled";
import {
    LoginButtonStyle,
    LoginFormStyle,
    LoginInputBlockStyle,
    LoginLabelStyle,
    LoginTitleStyle
} from "../styles/Login.styled";
import {Link} from "react-router-dom";
import {doesUserExists} from "../api/api";

function Login() {

    function onSubmitLogin(email, password) {
        doesUserExists(email, password).then((data) => {
            if (data.userExists) {
                localStorage.setItem('isLoggedIn', 'true');
            } else {
                console.log('user doesnt exists');
            }
            console.log('on login');
        });
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
                        email: yup
                            .string()
                            .required('Email is required')
                            .email('Invalid email address')
                            .max(89, 'At most eighty nine characters'),
                        password: yup
                            .string()
                            .required('Password is required')
                            .min(8, 'At least eight characters')
                            .max(44, 'At most forty four characters')
                    })}

                    onSubmit={(values) => {
                        onSubmitLogin(values.email, values.password);
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
                                <LoginFormStyle>

                                    <LoginTitleStyle>Login</LoginTitleStyle>

                                    <LoginInputBlockStyle>
                                        <LoginLabelStyle htmlFor="email">Email</LoginLabelStyle>
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
                                    </LoginInputBlockStyle>

                                    <LoginInputBlockStyle>
                                        <LoginLabelStyle htmlFor="password">Password</LoginLabelStyle>
                                        <input
                                            type={'password'}
                                            name={'password'}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter your password'
                                            value={values.password}/>
                                        {touched.password && errors.password
                                        &&
                                        <ErrorMessage name='password'>{error => <Error>{error}</Error>}</ErrorMessage>
                                        }
                                    </LoginInputBlockStyle>

                                    <p>Not a member? <Link to="/register">Sign up</Link></p>

                                    <LoginButtonStyle
                                        disabled={!isValid && !dirty}
                                        onClick={handleSubmit}
                                        type='submit'
                                        variant="outline-info">
                                        Login me</LoginButtonStyle>

                                </LoginFormStyle>
                            </Form>)
                    }}

                </Formik>


            </ContainerStyle>
        </MarginTopFromHeaderStyle>
    );

}

export default Login;