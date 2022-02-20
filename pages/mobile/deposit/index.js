import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/layout/header/mobile';
import Banner from '../../../components/pages/deposit/mobile/banner';
import PriceDisplay from '../../../components/pages/deposit/mobile/price_display';
import Booking from '../../../components/pages/deposit/mobile/booking';
import CommonHeader from '../../../components/base/common_header';
import Footer from "../../../components/layout/footer/mobile";

export default () => (
  <ContainerSC>
    <CommonHeader title="WPL" />
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
