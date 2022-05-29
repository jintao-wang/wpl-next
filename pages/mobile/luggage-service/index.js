import React from 'react';
import styled from 'styled-components';
import {
  Container as MuiContainer,
  Box as MuiBox,
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
          <div className="word1">回国行李</div>
          <div className="word2">空运/海运服务</div>
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
      <PostingSC>
        <h2 className="title">
          <img src="/mobile/luggage-service/airPosting.svg" alt="" />
        </h2>
        <ul>
          <li>
            <span className="normal-color">空运不包税,</span>
            <span className="highlight-color">中国任意城市统一价格</span>
          </li>
          <li>
            <span className="normal-color">行李箱包装后</span>
            <span className="highlight-color">长+宽+高不能超过150cm</span>
          </li>
          <li>
            <span className="normal-color">一箱也是团购价，每箱免费保险£50，不可额外购买保险</span>
          </li>
          <li>
            <span className="normal-color">空运</span>
            <span className="highlight-color">3箱以上，格拉斯哥门店2mile内免费取件</span>
          </li>
          <li>
            <span className="normal-color">空运</span>
            <span className="highlight-color">时效2-3周</span>
          </li>
        </ul>
        {/*<p className="attention-container">*/}
        {/*  <div className="attention">纸箱：0.1-19.5kg以内86镑（纸箱胶带另外收费，如需防磨防水专业包装另付6镑）</div>*/}
        {/*  <div className="attention">行李箱：0.1-21.5kg以内113镑（需额外付DIY包装费用10镑）</div>*/}
        {/*</p>*/}
        <p>空运超重部分收费标准为5镑/kg</p>
        <h2 className="title">
          <img src="/mobile/luggage-service/seaShipping.svg" alt="" />
        </h2>
        <ul>
          <li>
            <span className="highlight-color">海运100%包税！一价到底！</span>
            <span className="normal-color">具体地址价格联系客服</span>
          </li>
          <li>
            <span className="highlight-color">海运行李箱也提供专业纸箱包装，免费防潮加固！</span>
          </li>
          <li>
            <span className="normal-color">一箱也是团购价，每箱免费保险£50</span>
            <span className="highlight-color">可额外购买保险</span>
          </li>
          <li>
            <span className="normal-color">海运</span>
            <span className="highlight-color">10箱以上全英免费取件</span>
          </li>
          <li>
            <span className="normal-color">海运</span>
            <span className="highlight-color">时效10-12周</span>
          </li>
        </ul>
        {/*<p className="attention-container">*/}
        {/*  <div className="attention">纸箱：0.1-29.5kg 52镑</div>*/}
        {/*  <div className="attention">行李箱：0.1-26.8kg 62镑</div>*/}
        {/*</p>*/}
        <p>
          <a href="/mobile/luggage-service/2020年海运客户须知文档.pdf">2020年海运客户须知文档</a>
        </p>
        <p>
          <a href="/mobile/luggage-service/空运VS海运.pdf">空运VS海运详情</a>
        </p>
      </PostingSC>
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
    background: url('/mobile/luggage-service/pexels-brett-sayles-1059608.jpg') center / cover;
    //filter: blur(1px);
    z-index: -1;
  }

  .container {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;

    .words {
      margin-left: 40px;
      //text-shadow: rgba(0, 0, 0, 1) 5px 0 5px;
      color: #316DCD;

      .word1 {
        font-size: 32px;
        letter-spacing: 3px;
        font-weight: 700;
        text-shadow: 0 0 5px #FFFFFF, 0 0 5px #FFFFFF;
      }

      .word2 {
        margin-top: 15px;
        font-size: 18px;
        letter-spacing: 4px;
        color: #316DCD;
        font-weight: 600;
        text-shadow: 0 0 3px #FFFFFF, 0 0 3px #FFFFFF;
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
`;

const PostingSC = styled.div`
  .title {
    font-size: 2rem;
    
    img {
      height: 36px;
    }
  }
  
  .normal-color {
    color: #0D1E40;
  }
  
  .highlight-color {
    color: #922020;
  }
  
  p {
    color: rgb(26, 32, 39);
  }
  
  .attention-container {
    font-weight: 500;
    font-size: 14px;
    
    .attention {
      margin-bottom: 5px;
    }
  }
`;
