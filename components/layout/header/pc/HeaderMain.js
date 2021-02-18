import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderMain = () => {
  const [activeLink, setActiveLink] = useState('/');
  useEffect(() => {
    if (window.location.href.includes('deposit')) {
      setActiveLink('/deposit');
    } else {
      setActiveLink('/');
    }
  }, []);
  return (
    <ContainerSC>
      <ContentSC>
        <LinksSC>
          <Link href="/">
            {/* eslint-disable-next-line global-require */}
            <LogoSC src={require('../static/wpl_logo.png')} alt="" />
          </Link>
          <Link href="/">
            <LinkSC active={activeLink === '/'}>首页</LinkSC>
          </Link>
          <Link href="/deposit">
            <LinkSC active={activeLink === '/deposit'}>行李寄存</LinkSC>
          </Link>
        </LinksSC>
      </ContentSC>
    </ContainerSC>
  );
};

export default HeaderMain;

const ContainerSC = styled.div`
  background: rgba(255,255,255,1);
`;
const ContentSC = styled.div`
  max-width: 1160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
const LinksSC = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const LinkSC = styled('div', ['active'])`
  color: ${(props) => (props.active ? 'rgba(52, 51, 152, 0.95)' : 'rgba(34, 36, 50, 0.9)')};
  margin-right: 48px;
  font-family: PingFangSC-Semibold,PingFang SC;
  letter-spacing: 1px;
  font-size: 15px;
  
  :hover {
    //color: rgba(52, 51, 152, 0.95);
  }
`;
const LogoSC = styled.img`
  height: 36px;
  margin-right: 96px;
`;
const CartSC = styled('div')`

`;
