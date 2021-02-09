import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop';

const Header = () => {
  useEffect(() => {}, []);

  return (
    <ContainerSC>
      <HeaderTop />
    </ContainerSC>
  );
};

const ContainerSC = styled.div`
  //background: rgba(51,51,51,1);
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

export default Header;
