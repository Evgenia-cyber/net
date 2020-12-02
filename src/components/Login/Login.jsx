import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="login">Логин</label>
        <Field
          component="input"
          name="login"
          type="text"
          placeholder="Введите логин"
        />
        <br />
        <label htmlFor="password">Пароль</label>
        <Field
          component="input"
          name="password"
          type="text"
          placeholder="Введите пароль"
        />
        <br />
        <label>
          <Field component="input" name="rememberMe" type="checkbox" />{" "}
          запомнить меня
        </label>
        <br />
        <button>Войти</button>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const submit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={submit} />
    </div>
  );
};

export default Login;
