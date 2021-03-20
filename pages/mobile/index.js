import React from 'react';
import styled from 'styled-components';
import Header from '../../components/layout/header';
import usePcMobileRedirect from '../../hooks/usePcMobileRedirect';

export default () => {
  usePcMobileRedirect();

  return (
    <ContainerSC>
      <Header />
    </ContainerSC>
  );
};

const ContainerSC = styled.div`
`;
