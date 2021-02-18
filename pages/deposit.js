import React from 'react';
import styled from 'styled-components';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import Banner from '../components/pages/deposit/banner';
import PriceDisplay from '../components/pages/deposit/price_display';
import Booking from '../components/pages/deposit/booking';

export default () => (
  <ContainerSC>
    <Header />
    <Banner />
    <ContentSC>
      <PriceDisplay />
      <Booking />
    </ContentSC>
    <Footer />
  </ContainerSC>
);

const ContainerSC = styled.div`
`;
const ContentSC = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   flex-direction: column;
`;
