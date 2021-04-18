import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { emailStore, signedStore } from '../../../../store';
import app from '../../../../firebase';
import { CurrentUser } from '../../../../constant';
import Modal from '../../../base/modal/3.0';
import Login from '../../../common/login';

const Header = () => {
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
        <LinksSC>
          <Link href="/mobile">
            {/* eslint-disable-next-line global-require */}
            <LogoSC src={require('../static/wpl_logo.png')} alt="" />
          </Link>
        </LinksSC>
        <OperationsSC>
          <SignInfoSC>
            {
              signedState.isSigned ? (
                <SignedInfoSC>
                  <div className="text">
                    <span>{emailState.email}</span>
                    <svg
                      viewBox="0 0 1024 1024"
                      width="20"
                      height="20"
                      fill="#333"
                      style={{ marginBottom: '-1px' }}
                    >
                      <path
                        d="M512 608c-6.4 0-19.2 0-25.6-6.4l-128-128c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0L512 531.2l102.4-102.4c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8l-128 128C531.2 608 518.4 608 512 608z"
                      />
                    </svg>
                  </div>
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
          <Link href="https://www.wpl.international">
            <LangSC>To-En</LangSC>
          </Link>
        </OperationsSC>
      </ContentSC>
    </ContainerSC>
  );
};

export default Header;

const ContainerSC = styled.div`
  background: white;
  box-shadow: 0 5px 40px -1px rgba(2,10,18,.1)
`;

const ContentSC = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  box-sizing: border-box;
`;

const LinksSC = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoSC = styled.img`
  height: 36px;
  margin-right: 40px;
`;

const OperationsSC = styled.div`
  display: flex;
`;

const SignInfoSC = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const SignedInfoSC = styled.div`
  display: flex;
  align-items: center;

  .text {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .line {
    width: 2px;
    height: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const NoSignedInfoSC = styled(SignedInfoSC)``;

const LangSC = styled.div`
  padding: 4px 6px;
  font-size: 14px;
  border-radius: 3px;
  border: 1px #35339A solid;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #35339A;
`;
