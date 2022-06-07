import React from 'react';
import styled from 'styled-components';
import {
  Container as MuiContainer,
} from '@mui/material';
import Header from '../../../components/layout/header/mobile';
import Footer from '../../../components/layout/footer/mobile';

export default () => (
  <MuiContainer
    sx={{
      paddingLeft: 0,
      paddingRight: 0,
    }}
  >
    <Header />
    <BannerSC>
      <div className="container">
        <div className="words">
          <div className="word1">英国境内</div>
          <div className="word2">邮寄/搬家服务</div>
        </div>
        <div className="slogan">
          <div className="word3-1">七年老店</div>
          <div className="word3-2">专注物流</div>
          <div className="word3-3">极速送达</div>
          <div className="word3-4">竭诚服务</div>
        </div>
      </div>
    </BannerSC>
    <ContentSC>
      <p>
        全英取件，英国皇家邮政门到门邮寄到英国各大主要城
        市，安全高效，第二个工作日发出，1-2个工作日到达！
        仅限纸箱包装，单边不能超过 1米，长宽高之和小于
        150cm，每箱体积与实际重量都
        <span className="highlight">小于 30kg 即可</span>
        .单边超 过1米，价格请联系客服。
      </p>
      <h2 className="highlight center">首箱£30.00</h2>
      <h2 className="highlight center">第二箱起£16. 00</h2>
      <p className="highlight center bold">异地取件费用王10.00</p>
      <p className="highlight center bold">伦敦地区每个订单有1镑附加费！</p>
      <p className="center bold">注：同学们转学/搬家/送礼物 都可以邮寄包裹门到门服务！</p>
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
    background: url('/mobile/move-house/banner.jpg') center / cover;
    z-index: -1;
  }

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-image: linear-gradient(to top, rgb(0 0 0 / .4), rgb(0 0 0 / 0));

    .words {
      margin-left: 40px;
      color: #316DCD;

      .word1 {
        font-size: 32px;
        letter-spacing: 3px;
        font-weight: 700;
        text-shadow: 0 0 4px #FFFFFF, 0 0 4px #FFFFFF;
      }

      .word2 {
        margin-top: 15px;
        font-size: 18px;
        letter-spacing: 4px;
        color: #316DCD;
        font-weight: 600;
        text-shadow: 0 0 4px #FFFFFF, 0 0 4px #FFFFFF;
      }
    }

    .slogan {
      position: absolute;
      bottom: 0;
      font-size: 14px;
      letter-spacing: 2px;
      color: rgba(254, 254, 255, 1);
      display: flex;
      font-weight: 600;
      width: 100%;

      .word3-1 {
        background: #FFA512;
        flex: 1;
        text-align: center;
      }

      .word3-2 {
        background: #33318D;
        flex: 1;
        text-align: center;
      }

      .word3-3 {
        background: #FFA512;
        flex: 1;
        text-align: center;
      }

      .word3-4 {
        background: #33318D;
        flex: 1;
        text-align: center;
      }
    }
  }
`;

const ContentSC = styled.div`
  width: 100%;
  background: #FFFFFF;
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
