import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/layout/header/mobile';
import Footer from '../../../components/layout/footer/mobile';

export default () => (
  <ContainerSC>
    <Header />
    <BannerSC>
      <div className="container">
        <div className="words">
          <div className="word1">WPL回国行李_空运</div>
          <div className="word2">免费官方皇家邮政上门取件</div>
          <div className="word3">5箱起每箱立减6镑</div>
        </div>
      </div>
    </BannerSC>
    <ServiceIntroductionSC>
      <div className="title">服务介绍</div>
      <div className="container">
        <div className="common">
          <div>每箱 ≤ 22kg</div>
          <div className="price">£62</div>
        </div>
        <div className="common">
          <div>每箱 22.01-25kg</div>
          <div className="price">£68</div>
        </div>
        <div className="common">
          <div>每箱 25.01-30kg</div>
          <div className="price">£78</div>
        </div>
      </div>
    </ServiceIntroductionSC>
    <BoxSC>
      <div className="title">专用纸箱</div>
      <div className="text-container">
        <div className="first">
          <div
            style={{
              color: 'rgb(167, 32, 26)',
            }}
          >
            5层加厚硬纸板箱
          </div>
          <div
            style={{
              marginLeft: '5px',
              marginRight: '5px',
            }}
          >
            特惠价
          </div>
          <div
            style={{
              color: 'rgb(167, 32, 26)',
            }}
          >
            £4.00
          </div>
          <div>（店里可提供）</div>
        </div>
        <div className="second">十箱以上提供免费送箱服务</div>
      </div>
    </BoxSC>
    <FlowSC>
      <div className="title">服务流程</div>
      <div className="step">
        <div className="title">
          <img src="/mobile/luggage-service/640.png" alt="" />
          <div className="text">准备阶段</div>
        </div>
        <div className="content">
          {/* eslint-disable-next-line max-len */}
          纸箱必须选择双层厚实纸箱，单层纸箱极易造成包裹损坏和包裹内物品散落，单个包裹实际重量和体积重量都不能超过30公斤，哪个重大算哪个（体积重量计算方法：（长cm X 宽cm X 高 cm）/5000）。否则您会收到来自PARCEL FORCE的£100超重欠款单或者邮局司机会将包裹退回发件地址。皇家邮政新规定，不能直接邮寄拉杆箱，否则会产生退运或者罚款。你们自己打包好行李后，通过微信或者到实体店联系我们，告诉我们箱子的重量，箱子的外尺寸（以厘米为单位，务必要准确，如超出规定范围，产生退运，费用自理），之后根据重量缴费，付款方式：银行转账或者现金支付。
        </div>
      </div>
      <div className="step">
        <div className="title">
          <img src="/mobile/luggage-service/640.png" alt="" />
          <div className="text">资料填写</div>
        </div>
        <div className="content">
          {/* eslint-disable-next-line max-len */}
          告诉我们中国的收件人信息（必须是本人名字）以及英国发件人的信息。周一至周五2pm之前，当天即出PDF跟踪条形码，之后需要打印出带有这跟踪条码的订单，粘贴在箱子表面，第二天官方皇家邮政去发件人指定地点取件，他们会扫描箱子表面跟踪条形码，之后直接运输到飞机场。取件时间周一至周五8am-8pm，如果错过，再次申请取件需要付款10镑。
        </div>
      </div>
    </FlowSC>
    <KnowSC>
      <div className="title">空运禁忌品须知</div>
      <div className="text">常见的空运禁运的物品有喷雾（Body Spray），含酒精的液体，指甲油，珠宝，现金，光盘，打火机，钱币，香水，普通液体/乳液（每箱总量不超过1L），电池，硒鼓及油墨等。如果有上述物品会产生退运或者扣货。</div>
    </KnowSC>
    <Footer />
  </ContainerSC>
);

const ContainerSC = styled('div')`
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
    background: url('/mobile/luggage-service/pexels-matt-hardy-1928068.jpg') center / cover;
    filter: brightness(80%) blur(1px);
    z-index: -1;
  }

  .container {
    width: 100%;
    display: flex;
    align-items: center;

    .words {
      margin-left: 40px;
      color: rgba(254, 254, 255, 1);
      text-shadow: rgba(0, 0, 0, 1) 5px 0 5px;

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
        color: rgba(254, 254, 255, 0.8);
      }
    }
  }
`;

const ServiceIntroductionSC = styled('div')`
  margin-top: 20px;

  .title {
    font-size: 24px;
    color: #333333;
    text-align: center;
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    width: 70%;

    .common {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 8px;
      color: #333;

      .price {
        font-weight: 600;
        color: rgb(167, 32, 26);
      }
    }
  }
`;

const BoxSC = styled('div')`
  margin-top: 25px;

  .title {
    font-size: 24px;
    color: #333333;
    text-align: center;
  }

  .text-container {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 90%;

    .first {
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      font-weight: 500;
    }

    .second {
      margin-top: 5px;
      text-align: center;
    }
  }
`;

const FlowSC = styled('div')`
  margin-top: 30px;

  .title {
    font-size: 24px;
    color: #333333;
    text-align: center;
  }
  
  .step{
    margin-top: 40px;
    position: relative;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(62, 62, 62);
    padding: 30px 10px 20px 10px;
    box-sizing: border-box;
    
    .title {
      position: absolute;
      left: -20px;
      top:-30px;
      
      img {
        height: 60px;
      }
      
      .text {
        position: absolute;
        left: 0;
        right: 0;
        top:15px;
        font-size: 12px;
        font-weight: 600;
      }
    }
    .content {
      text-indent: 2em;
    }
  }
`;

const KnowSC = styled('div')`
  margin-top: 30px;
  margin-bottom: 50px;

  .title {
    font-size: 24px;
    color: #333333;
    text-align: center;
  }
  
  .text {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
`;
