import React from 'react';
import styled from 'styled-components';
import HeaderTop from './HeaderTop';
import HeaderMain from './HeaderMain';

const Header = () => (
  <ContainerSC>
    {/*<HeaderTop />*/}
    <HeaderMain />
  </ContainerSC>
);

export default Header;

const ContainerSC = styled.div`
  //background: rgba(51,51,51,1);
`;
