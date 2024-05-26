import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
const Login = ({ users }) => {

   const navigate =useNavigate()













  const ValidateLogin = Yup.object().shape({
    login: Yup.string().required("field is Requried"),
    password: Yup.string().required("field is Reqired"),
  });

  const Authorization = (value) => {
    let user = users.find(
      (elem) => elem.login === value.login && elem.password === value.password
    );

    if (user) {
      return navigate('/profile',{state :user})
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        validationSchema={ValidateLogin}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form>
            <h2>Login Page</h2>
            <Field name="login" placeholder="login" />
            <ErrorMessage name="login" component="h5" />
            <Field name="password" placeholder="password" />
            <ErrorMessage name="password" component="h5" />
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
