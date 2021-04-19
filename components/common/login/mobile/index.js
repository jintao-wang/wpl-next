import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import app from '../../../../firebase';
import { signedStore, emailStore } from '../../../../store';
import { CurrentUser } from '../../../../constant';

const Login = ({
  signType,
  onClose,
}) => {
  const [_signType, setSignType] = useState(signType);
  const [signInError, setSignInError] = useState('');
  const [signInState, setSignInState] = useState('登入');
  const [signUpState, setSignUpState] = useState('注册');
  const [canClick, setCanClick] = useState(true);
  const [, signedActions] = signedStore.useModel();
  const [, emailActions] = emailStore.useModel();
  const emailInput = useRef(null);
  const password = useRef(null);

  useEffect(() => {
    const handleKeyEvent = (e) => {
      if (e.keyCode === 13 && _signType === 'signIn') {
        handleSignIn();
        return;
      }
      if (e.keyCode === 13 && _signType === 'signUp') {
        handleSignUp();
      }
    };
    document.addEventListener('keydown', handleKeyEvent);
    return () => {
      document.removeEventListener('keydown', handleKeyEvent);
    };
  }, []);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      if (user) {
        CurrentUser.set({
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
          refreshToken: user.refreshToken,
        });
        emailActions.setEmail(CurrentUser.info.email);
        signedActions.onChange(true);
        user.getIdToken(true).then((idToken) => {
          CurrentUser.info.token = idToken;
        }).catch((error) => {
          console.error(error);
        });
      } else {
        CurrentUser.clear();
      }
    });
  }, []);

  const handleEmailChange = () => {
    if (signInError) {
      setSignInError('');
      emailInput.current.value = '';
      password.current.value = '';
    }
  };

  const handlePasswordChange = () => {
    if (signInError) {
      setSignInError('');
      emailInput.current.value = '';
      password.current.value = '';
    }
  };

  const setUserInfo = (currentUser) => {
    CurrentUser.set({
      displayName: currentUser.displayName,
      email: currentUser.email,
      emailVerified: currentUser.emailVerified,
      phoneNumber: currentUser.phoneNumber,
      photoURL: currentUser.photoURL,
      uid: currentUser.uid,
      refreshToken: currentUser.refreshToken,
    });
    emailActions.setEmail(CurrentUser.info.email);
    setCanClick(true);
    signedActions.onChange(true);
    onClose();
    currentUser.getIdToken(true).then((idToken) => {
      CurrentUser.info.token = idToken;
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleSignIn = () => {
    setCanClick(false);
    setSignInState('登入中...');
    app.auth().signInWithEmailAndPassword(emailInput.current.value, password.current.value)
      .then(() => {
        setUserInfo(app.auth().currentUser);
      })
      .catch((e) => {
        setCanClick(true);
        setSignInState('登入');
        setSignInError(e.code);
      });
  };

  const handleSignUp = () => {
    setCanClick(false);
    setSignUpState('注册中...');
    app.auth().createUserWithEmailAndPassword(emailInput.current.value, password.current.value)
      .then(() => {
        setUserInfo(app.auth().currentUser);
      })
      .catch((e) => {
        setCanClick(true);
        setSignUpState('注册');
        setSignInError(e.code);
      });
  };

  return (
    <ContainerSC>
      <CloseSC onClick={onClose}>
        <svg
          t="1612785238881"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5388"
          width="28"
          height="28"
        >
          <path
            d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z"
            p-id="5389"
            fill="#333333"
          />
        </svg>
      </CloseSC>
      <TitleSC>
        <LoginSC onClick={() => setSignType('signIn')} active={_signType === 'signIn'}>登入</LoginSC>
        <div className="point" />
        <LogUpSC onClick={() => setSignType('signUp')} active={_signType === 'signUp'}>注册</LogUpSC>
      </TitleSC>
      <FormSC>
        <form className="form">
          <FormLineSC>
            <span>邮件:</span>
            <input
              type="email"
              placeholder="请输入邮箱"
              onFocus={handleEmailChange}
              ref={emailInput}
            />
          </FormLineSC>
          <FormLineSC>
            <span>密码:</span>
            <input
              type="password"
              placeholder="请输入密码"
              onFocus={handlePasswordChange}
              ref={password}
            />
          </FormLineSC>
          <ErrorMessageSC>{signInError}</ErrorMessageSC>
          {
            _signType === 'signIn'
              ? (
                <SubmitSC
                  onClick={handleSignIn}
                  canClick={canClick}
                >
                  {signInState}
                </SubmitSC>
              )
              : (
                <SubmitSC onClick={handleSignUp} canClick={canClick}>{signUpState}</SubmitSC>
              )
          }
        </form>
      </FormSC>
    </ContainerSC>
  );
};

Login.propTypes = {
  signType: PropTypes.string,
  onClose: PropTypes.func,
};

Login.defaultProps = {
  signType: 'signIn',
  onClose: () => {},
};
export default Login;

const ContainerSC = styled.div`
  width: 88vw;
  background: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  user-select: none;
  padding-bottom: 20px;
`;
const CloseSC = styled('div')`
  position: absolute;
  right: 15px;
  top: 13px;
  cursor: pointer;
`;
const TitleSC = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    font-size: 18px;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    color:  #333333;
    
    .point {
      margin-left: 20px;
      margin-right: 20px;
      width: 6px;
      height: 6px;
      background: #333333;
      border-radius: 50%;
    }
  
`;
const LoginSC = styled('div', ['active'])`
  padding: 8px 6px;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? '#2964b5 2px solid' : 'rgba(41,100,181,0) 2px solid')};
`;
const LogUpSC = styled('div', ['active'])`
  padding: 10px;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? '#2964b5 2px solid' : 'rgba(41,100,181,0) 2px solid')};
`;
const FormSC = styled('div')`
  margin-top: 20px;
  
  .form {
    text-align: center;
  }
`;
const FormLineSC = styled('div')`
  font-size: 18px;
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  color:  #333333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  input {
    height: 30px;
    width: 160px;
    border-radius: 2px;
    border: #e4e6fc solid 1px;
    padding-left: 10px;
    margin-left: 15px;
    outline:none;
  }
`;
const ErrorMessageSC = styled('div')`
  margin-top: -8px;
  color: red;
  font-size: 13px;
  height: 18px;
`;
const SubmitSC = styled('div', ['canClick'])`
  width: 180px;
  height: 32px;
  outline:none;
  border-radius: 20px;
  color: white;
  font-size: 18px;
  letter-spacing: 10px;
  margin-top: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background:  ${(props) => (props.canClick ? '#0a62b0' : 'rgba(10,98,176,0.6)')};
`;
