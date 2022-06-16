import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import useBodyClass from '../../admin/hooks/useBodyClass';
import { removeError, setError } from '../../ui/store/actions';
import { startLogin } from '../store/actions';

export const LoginView = () => {

  // ADD CLASSES TO MAIN BODY
  useBodyClass([`hold-transition`, `login-page`]);
  // useBodyClass([`hold-transition`,`login-page`,`dark-mode`]);

  const dispatch = useDispatch();
  const { loading, msgError } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    username: 'defaultuser',
    password: 'defaultuser'
  });

  const { username, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    dispatch(startLogin(username, password));
  };

  const isFormValid = () => {

    let err = "";
    if (username.trim().length === 0) {
      err = "Username is required";
    } else if (password.trim().length === 0) {
      err = "Password is required";
    }

    if (err.trim().length > 0) {
      dispatch(setError(err));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (

    <>
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html"><b>Point of Sale </b>POS</a>
        </div>
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form onSubmit={handleLogin} >
              {
                msgError &&
                (
                  <div className="alert alert-danger" role="alert">
                    {msgError}
                  </div>
                )
              }

              <div className="input-group mb-3">
                <input type="text" name="username" className="form-control" placeholder="Usename" value={username} onChange={handleInputChange} />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password" name="password" className="form-control" placeholder="Password" value={password} onChange={handleInputChange} />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">

                {loading &&
                  <div className="alert alert-info col-12" role="alert">
                    <div className="spinner-grow text-light spinner-grow-sm" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                    &nbsp;&nbsp;Validating credentials, please wait....
                  </div>
                }

                <div className="col-12 mt-2">
                  <button type="submit" className="btn btn-primary btn-block" disabled={loading}>Sign In</button>
                </div>
                {/* /.col */}
              </div>
            </form>
            {/* /.social-auth-links */}
            <p className="mb-1 mt-3 text-center">
              <a href="forgot-password.html" className="text-muted">I forgot my password</a>
            </p>
            {/* <p className="mb-0">
            <a href="register.html" className="text-center">Register a new membership</a>
          </p> */}
          </div>
          {/* /.login-card-body */}
        </div>
      </div>

    </>

  )
}
