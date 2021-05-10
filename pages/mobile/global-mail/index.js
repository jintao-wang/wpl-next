import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/layout/header/mobile';

export default () => (
  <ContainerSC>
    <Header />
    <BannerSC>
      <div className="words">
        <div className="word1">WPL全球直邮</div>
        <div className="word2">覆盖全球210多个国家</div>
      </div>
    </BannerSC>
    <ContentSC>
      <div className="title">邮寄须知</div>
      <ul className="list">
        <li>重量： 1-29千克</li>
        <li>税：欧洲国家免税，其它地区可能会收取额外的税</li>
        <li>赔偿：最高赔偿金额为£50</li>
        <li>运输时间：10-14个工作日</li>
        <li>
          中国包裹追踪网站：
          <a href="http://www.ems.com.cn/">http://www.ems.com.cn/</a>
        </li>
        <li>
          国际包裹追踪网站：
          <a href="https://www.aftership.com/couriers/bpost-international">
            https://www.aftership.com/couriers/bpost-international
          </a>
        </li>
        <li>
          价格参考：
          <a href="/global-shop/2021全世界价格表英文版.pdf">2021全世界价格表英文版.pdf</a>
        </li>
      </ul>
    </ContentSC>
  </ContainerSC>
);

const ContainerSC = styled.div`
  padding-top: 48px;
`;

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
    background: url('/global-mail/pexels-fauxels-3183174.jpg') center / cover;
    filter: brightness(70%) blur(2px);
    z-index: -1;
  }

  .words {
    color: rgba(254,254,255,1);
    text-shadow: rgba(0,0,0,1) 5px 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .word1 {
      font-size: 32px;
      letter-spacing: 3px;
      font-weight: 700;
    }

    .word2 {
      margin-top: 15px;
      font-size: 18px;
      letter-spacing: 4px;
    }

    .word3 {
      margin-top: 5px;
      margin-left: 5px;
      font-size: 14px;
      letter-spacing: 2px;
      color: rgba(254,254,255,0.8);
    }
  }
`;

const ContentSC = styled('div')`
  padding: 30px 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;

  .title {
    font-size: 24px;
    color: #333333;
    padding-bottom: 8px;
  }
  
  .list {
    li {
      margin-bottom: 12px; 
    }
  }
  
`;
