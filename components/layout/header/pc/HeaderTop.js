import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChineseFlag from '../static/china.svg';
import Login from '../../../common/login';
import Modal from '../../../base/modal/3.0';
import { signedStore, emailStore } from '../../../../store';
import { CurrentUser } from '../../../../constant';
import app from '../../../../firebase';

const HeaderTop = () => {
  const [signType, setSignType] = useState('signIn');
  const [isSignForm, setIsSignForm] = useState(false);
  const [signedState, signedActions] = signedStore.useModel();
  const [emailState, emailActions] = emailStore.useModel();

  const handleLogout = () => {
    app.auth().signOut().then(() => {
      signedActions.onChange(false);
      emailActions.setEmail(null);
      CurrentUser.clear();
    }).catch((error) => {
      console.error(error);
    });
  };

  const handleSign = (type) => {
    setSignType(type);
    setIsSignForm(true);
  };

  return (
    <ContainerSC>
      <ContentSC>
        <LanguageSC>
          <img className="icon" src={ChineseFlag} alt="" />
          <span className="text">中文</span>
        </LanguageSC>
        <SignInfoSC>
          {
            signedState.isSigned ? (
              <SignedInfoSC>
                <div className="text">{emailState.email}</div>
                <div className="line" />
                <div className="text" onClick={handleLogout}>退出</div>
              </SignedInfoSC>
            ) : (
              <Modal
                visible={isSignForm}
                closeFunc={() => setIsSignForm(false)}
                content={
                  (
                    <Login
                      signType={signType}
                      onClose={() => setIsSignForm(false)}
                    />
                  )
                }
                trigger={
                  (
                    <NoSignedInfoSC>
                      <div className="text" onClick={() => handleSign('signIn')}>登入</div>
                      <div className="line" />
                      <div className="text" onClick={() => handleSign('signUp')}>注册</div>
                    </NoSignedInfoSC>
                  )
                }
              />
            )
          }
        </SignInfoSC>
      </ContentSC>
    </ContainerSC>
  );
};

export default HeaderTop;

const ContainerSC = styled.div`
  background: rgba(45,45,46,1);
`;
const ContentSC = styled.div`
  max-width: 1160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: white;
  padding: 6px 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
const LanguageSC = styled.div`
  display: flex;
  cursor: pointer;
  
  .icon {
    width: 24px;
    height: 14px;
    margin-right: 10px;
  }

  .text {
    height: 14px;
    line-height: 14px;
  }
`;
const SignInfoSC = styled.div`
  display: flex;
  align-items: center;
`;

const SignedInfoSC = styled.div`
  display: flex;
  align-items: center;

  .text {
    cursor: pointer;
  }
  
  .line {
    width: 2px;
    height: 12px;
    background: white;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const NoSignedInfoSC = styled(SignedInfoSC)``;
