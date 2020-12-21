import React, {useState} from 'react';
import {ContainerStyle, MarginTopFromHeaderStyle} from "../styles/General.styled";
import {ErrorMessage, Form, Formik, Field} from "formik";
import * as yup from "yup";
import {Error} from "../styles/Checkout.styled";
import {
    RegisterButtonStyle,
    RegisterFormStyle,
    RegisterInputBlockStyle,
    RegisterLabelStyle,
    RegisterTitleStyle
} from "../styles/Register.styled";
import {Link, useHistory} from "react-router-dom";
import {registerUser} from "../api/api";

function Register() {

    const [buttonActive, setButtonActive] = useState(true);
    const history = useHistory();

    function onSubmitRegister(username, email, password) {
        setButtonActive(false);
        registerUser(username, email, password).then((data) => {
            if (data.result === true) {
                alert('You have successfully registered!');
                setButtonActive(true);
                history.push('/login');
            } else if (data.result === 'username' || data.result === 'email') {
                alert(`User with such ${data.result} already exists!`);
                setButtonActive(true);
            }
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
                        onSubmitRegister(values.username, values.email, values.password);

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
                                        <Field
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
                                        <Field
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
                                        <Field
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
                                        <RegisterLabelStyle htmlFor="confirmPassword">Confirm
                                            password</RegisterLabelStyle>
                                        <Field
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

                                    {buttonActive
                                        ? (
                                            <RegisterButtonStyle
                                                disabled={!isValid && !dirty}
                                                onClick={handleSubmit}
                                                type='submit'
                                                variant="outline-info">
                                                Login me</RegisterButtonStyle>
                                        ) : (
                                            <RegisterButtonStyle
                                                disabled={true}
                                                onClick={handleSubmit}
                                                type='submit'
                                                variant="outline-info">
                                                Login me</RegisterButtonStyle>
                                        )}

                                </RegisterFormStyle>
                            </Form>)
                    }}
                </Formik>

            </ContainerStyle>
        </MarginTopFromHeaderStyle>
    );
}

export default Register;