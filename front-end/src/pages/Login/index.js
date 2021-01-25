import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './_login.sass';

import Text from 'src/components/Text';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import Spinner from 'src/components/Spinner';
import Navbar from 'src/components/Navbar';

import LoginAuth from 'src/actions/Auth';

const Login = ({
  LoginAuth = () => {},
  loginLoading = false,
  isFailed,
  message,
}) => {

  const [input, setInput] = useState({
    username: 'pandudpn',
    password: '1234',
    submitted: false,
  });
  const { username, password, submitted } = input;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (e) => {
    setInput((state) => ({ ...state, submitted: true }));
    e.preventDefault();

    // form-data
    const payloadLogin = {
      username: 'pandudpn',
      password: '1234',
    };

    if (username && password) {
      LoginAuth(payloadLogin);
    }
  };

  return (
    <>
      <Navbar />
      <div className="containerlogin">
        <form
          className="containerinput"
          onSubmit={handleSubmit}
        >
          {/* <Img
          src={CompanyLogo}
          alt="companylogo"
          className="logocompanylogin pointer"
        /> */}
          <Text
            Tag="h5"
            className="reg t-black center-align"
            text="whatsapp clone Login"
            style={{ margin: '0 0 16px' }}
          />
          <div className="username">
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={handleChange}
              value={username}
              className={submitted && !username ? 'border-error' : ''}
            />
          </div>
          <div className="password">
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={password}
              className={submitted && !password ? 'border-error' : ''}
            />
          </div>
          {submitted && (!username || !password)
        && (
          <Text
            Tag="h5"
            className="reg t-error center-align"
            text={!username && !password ? "Username dan Password tidak boleh kosong!" : !username ? "Username tidak boleh kosong!" : !password ? 'Password tidak boleh kosong!' : ''}
            style={{ margin: '16px 0 0' }}
          />
        )}
          {submitted && isFailed
          && (
            <Text
              Tag="h5"
              className="reg t-error center-align"
              text={message}
              style={{ margin: '16px 0 0' }}
            />
          )}
          {/* <Text
          Tag="h5"
          className="reg t-grey center-align"
          text="Forget Password?"
          style={{ margin: '16px 0' }}
        /> */}
          {/* <Text
          Tag="h5"
          className="reg t-highlight center-align margin0"
          text="Please call support: (012) 90712990"
        /> */}
          {loginLoading
            ? (
              <div className="spinnerloading">
                <Spinner size="25px" />
              </div>
            ) : (
              <Button
                type="submit"
                className="button t-black reg center-align"
                text="Login"
              />
            )}
          {/* {isMobileSize
        && (
          <div className="footer">
            <Text
              Tag="h6"
              className="reg t-blue center-align"
              style={{ margin: '0 3px 0 0' }}
              text="Powered by"
            />
            <Text
              Tag="h6"
              className="bold t-blue center-align margin0"
              text="MonsterVending"
            />
          </div>
        )} */}
        </form>
        {/* {!isMobileSize
      && (
        <div className="footer">
          <Text
            Tag="h6"
            className="reg t-blue center-align"
            style={{ margin: '0 3px 0 0' }}
            text="Powered by"
          />
          <Text
            Tag="h6"
            className="bold t-blue center-align margin0"
            text="MonsterVending"
          />
        </div>
      )} */}
      </div>
    </>
  );
};

Login.propTypes = {
  LoginAuth: PropTypes.func.isRequired,
  loginLoading: PropTypes.bool,
  isFailed: PropTypes.bool,
  message: PropTypes.string,
};

Login.defaultProps = {
  loginLoading: false,
  isFailed: false,
  message: '',
};

const mapStateToProps = (state) => {
  const loginState = state.get('loginAuth');

  return {
    loginLoading: loginState.loginLoading,
    isFailed: loginState.isFailed,
    message: loginState.message,
  };
};

const mapDispatchToProps = (dispatch) => ({
  LoginAuth: (payload) => dispatch(LoginAuth(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
