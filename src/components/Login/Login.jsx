import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { FormControl } from "../common/FormControls/FormControls";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import s from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="login">Email</label>
        <Field
          component={FormControl}
          validate={[required]}
          name="email"
          type="text"
          placeholder="Введите email"
          fieldtype="input"
        />
        <br />
        <label htmlFor="password">Пароль</label>
        <Field
          fieldtype="input"
          component={FormControl}
          validate={[required]}
          name="password"
          type="password"
          placeholder="Введите пароль"
        />
        <br />
        <label>
          <Field
            component="input"
            // fieldType="input"
            // component={FormControl}
            // validate={[required]}
            name="rememberMe"
            type="checkbox"
          />{" "}
          запомнить меня
        </label>
        <br />
        {props.captchaUrl && (
          <>
            <img src={props.captchaUrl} alt="символы captcha" />
            <Field
              fieldtype="input"
              component={FormControl}
              validate={[required]}
              name="captcha"
              type="text"
              placeholder="Введите символы с картинки"
            />
          </>
        )}
        {props.error && <div className={s.formError}>{props.error}</div>}
        <button>Войти</button>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const submit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={submit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});
export default connect(mapStateToProps, { login })(Login);
