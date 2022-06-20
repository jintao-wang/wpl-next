import React from 'react';
import styled from 'styled-components';
import {
  Container as MuiContainer,
} from '@mui/material';
import Header from '../../../components/layout/header/mobile';
import Footer from '../../../components/layout/footer/mobile';
import CommonHeader from '../../../components/base/common_header';

export default () => (
  <MuiContainer
    sx={{
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: '48px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <CommonHeader title="WPL 5-7月特别活动" />
    <Header />
    <BannerSC>
      <div className="container">
        <div className="words">
          <h1 className="word1">5-7月特别活动</h1>
        </div>
      </div>
    </BannerSC>
    <ContentSC>
      <CardSC>
        <div className="left-part">
          <img src="/mobile/special-event/image1-small.jpg" alt="" />
        </div>
        <div className="right-part">
          <h2>物流专用纸箱</h2>
          <p>原价5镑</p>
          <p>特惠价￡4.00/个</p>
          <p>尺寸：50x 37 x 58 cm</p>
          <p>简介：毕业行李专用加厚加强纸箱（可装28-29寸行李箱体积的衣物）</p>
        </div>
      </CardSC>
      <CardSC>
        <div className="left-part">
          <img src="/mobile/special-event/image1-small.jpg" alt="" />
        </div>
        <div className="right-part">
          <h2>寄存专用纸箱</h2>
          <p className="highlight bold">FREE</p>
          <p>纸箱数量有限,先到先得</p>
        </div>
      </CardSC>
      <AttentionSC>
        <h2 className="center highlight">活动规则</h2>
        <p>转发活动海报&推文至3个200人以上学生微信群并截图，3天以后，寄存使用纸箱全部免费，用多少，免费多少！（寄存3个月以上，）</p>
        <p>海运拼团3箱以上，纸箱免费</p>
      </AttentionSC>
    </ContentSC>
    <Footer />
  </MuiContainer>
);

const BannerSC = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url('/mobile/special-event/banner-small.jpg') center / cover;
    z-index: -1;
  }

  .container {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(59, 122, 176, .9);
    padding: 2px 0;
    .words {
      color: #ffffff;

      .word1 {
        padding: 0;
        margin: 0;
        font-size: 32px;
        letter-spacing: 3px;
        font-weight: 800;
        text-shadow: 0 0 15px rgba(0,0,0,0.4), 0 0 15px rgba(0,0,0,0.4);
        text-align: center;
      }
    }
  }
`;

const ContentSC = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  color: #333333;

  .highlight {
    color: #EF2725;
  }
  
  .center {
    text-align: center;
  }
  
  .bold {
    font-weight: bold;
  }
`;

const CardSC = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  
  .left-part {
    width: 120px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid rgba(31, 31, 31, .2);
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  
  .right-part {
    padding-left: 20px;
    padding-top: 5px;
    flex: 1;

    h2 {
      padding: 0;
      margin: 0;
    }
  }
`;

const AttentionSC = styled.div`
  
`;
