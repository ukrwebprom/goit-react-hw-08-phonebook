import { useDispatch } from 'react-redux';
import { login } from 'redux/operations';
import { getAuthError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Login = () => {
  const dispatch = useDispatch();
  const isError = useSelector(getAuthError);

  const handleSubmit = e => {
    e.preventDefault();
    const regdata = {
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
    };
    dispatch(login(regdata));
  };
  return (
    <>
      <h1>User LogIn</h1>
      <div className="double-container">
        <div className="form-info">
          <p>
            Welcome to our login page! Please enter your email and password to
            access your account. If you don't have an account yet, you can sign
            up for free by clicking the <Link to="/register">Sign up</Link> button
          </p>
          {isError && <p className="auth-error">Wrong authorization data!</p>}
        </div>

        <form className="mainform" onSubmit={handleSubmit}>
          <label className="mainform__label">
            Email
            <input name="email" type="email" required />
          </label>
          <label className="mainform__label">
            Password
            <input name="password" type="password" required minLength="8" />
          </label>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
