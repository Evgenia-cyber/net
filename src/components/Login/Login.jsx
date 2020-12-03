import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { FormControl } from "../common/FormControls/FormControls";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";

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
        <button>Войти</button>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const submit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={submit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
