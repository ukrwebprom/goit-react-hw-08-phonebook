import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { getAuthError } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const Register = () => {
  const dispatch = useDispatch();
  const isError = useSelector(getAuthError);

  const handleSubmit = e => {
    e.preventDefault();
    const regdata = {
      name: e.currentTarget.elements.name.value,
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
    };
    dispatch(register(regdata));
  };

  return (
    <>
      <h1>User SignUp</h1>
      <div className="double-container">
        <div className="form-info">
          <p>
            Welcome to our sign up page! To get started, please provide your
            name, email address, and a secure password. By signing up, you'll
            gain access to all of our features and be able to manage your
            account online.
          </p>
          <p>
            {' '}
            If you already have an account with us, please{' '}
            <a href="/login">log in</a> instead.
          </p>
          {isError && <p className="auth-error">Something went wrong!</p>}
        </div>

        <form className="mainform" onSubmit={handleSubmit}>
          <label className="mainform__label">
            Name
            <input name="name" type="text" required />
          </label>
          <label className="mainform__label">
            Email
            <input name="email" type="email" required />
          </label>
          <label className="mainform__label">
            Password
            <input name="password" type="password" required minLength="8" />
          </label>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
