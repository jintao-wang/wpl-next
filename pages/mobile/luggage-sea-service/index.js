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
          <div className="word1">WPL回国行李_海运</div>
          <div className="word2">行李上限30kg，最低只需£48/箱！</div>
          <div className="word3">免费提供纸箱;免费提供胶带;免费防潮加固</div>
        </div>
      </div>
    </BannerSC>
    <FlowSC>
      <div className="title">毕业行李海运办理流程</div>
      <div className="step">
        <div className="title">
          01
        </div>
        <div className="content">
          预定箱数，转账或到店内现金支付，领取免费提供的箱子和免费的胶带。
        </div>
      </div>
      <div className="step">
        <div className="title">
          02
        </div>
        <div className="content">
          回去装箱，准备好护照首页复印件和身份证正反面复印件。
        </div>
      </div>
      <div className="step">
        <div className="title">
          03
        </div>
        <div className="content">
          海运预定＜10箱，等待我们拼箱成团后，统一通知，将装好的箱子送到店里，第二天统一安排英国DPF送到伦敦机场仓库。
        </div>
      </div>
      <div className="step">
        <div className="title">
          04
        </div>
        <div className="content">

          海运预定≥10箱，您装好箱子后3:00pm之前通知我们，我们可以安排第二天英国邮政PDF免费上门取件，并直接到伦敦机场仓库。
        </div>
      </div>
      <div className="step">
        <div className="title">
          05
        </div>
        <div className="content">
          到达伦敦机场后，我们会给每个箱子再次免费防潮加固，重新测量重量。
        </div>
      </div>
      <div className="step">
        <div className="title">
          06
        </div>
        <div className="content">
          行李上岸后、海关清关时、开始派送时，我们都会在微信中第一时间通知您。
        </div>
      </div>
    </FlowSC>
    <PriceSC>
      <div className="title">时间与价钱</div>
      <div className="container">
        <div className="line">
          <span
            style={{
              color: 'rgb(0, 51, 121)',
              fontWeight: 500,
            }}
          >
            经济海运包税30kg（10箱成团）：
          </span>
          大箱58x51x41cm £48/箱；旅游箱专用大箱81x51x36cm  £58/箱。
        </div>
        <div className="line">
          时效10-12周（其中不包含突发事件和公共假期）
        </div>
        <div className="line">
          海运都是无法跟踪的，到达中国海关后与清关完成后派送，我们都会第一时间通知您的，您就放心等待我们的通知与领取行李吧~
        </div>
      </div>
    </PriceSC>
    <KnowSC>
      <div className="title">注意事项</div>
      <p>由于中国海关发布通告，寄往中国大陆（港澳台除外）的书籍有很高的数量要求限制。</p>
      <p>规定：每个箱子里只允许放入5本书籍（打印资料和纸质笔记本不计算在内）。如果您有大量书籍要求运送回中国大陆，请您联系客服解决。</p>
      <p>请务必在此装箱单中，填写好您的物品品名（如衣服，鞋，书，文具等），以及每个品名的精确数量。如果因为 没有装箱单，或装箱单中填写品名与数量不符，造成的瞒报漏报等嫌疑，会产生以下情况</p>
      <p>
        （1）每箱 10 镑的查验费
      </p>
      <p>
        （2）每单 50 镑的再次报关费
      </p>
      <p>
        （3）再次报关的情况下（品名或数量更改），海关 扣押货物 ，不予清关等问题，大西洋物流将不承担任何责任，并且拥有最终解释权。如发现箱子内有任何烟，酒类等禁止进境物品，大西洋物流将会无条件配合中国海关，中国海关缉私局的调查，包括递交发件人护照，收件人信息等。请知悉。
      </p>
      <div className="info">备注：</div>
      <p>1.所有国外品牌手袋不建议运输,因为要按照国内专柜售价征税 30%。如果您愿意承担关税,请在装箱单里注明每个手袋的品牌和名称</p>
      <p>2.请不要锁行李箱，如果锁上，请在装箱单里填写好密码，否则会延误货物运输或导致海关破坏锁</p>
      <p>3.如果装箱单空白位置不够，请自行拿一张白纸继续填写。</p>
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
    background: url('/mobile/luggage-service/pexels-tom-fisk-3840441.jpg') center / cover;
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
        //margin-left: 5px;
        font-size: 14px;
        letter-spacing: 2px;
        color: rgba(254, 254, 255, 0.8);
      }
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
    margin-top: 30px;
    position: relative;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(62, 62, 62);
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;

    .title {
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      left: -15px;
      top:-15px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      background: rgb(0, 51, 121);
      color: white;
    }
    .content {
      text-indent: 2em;
    }
  }
`;

const PriceSC = styled('div')`
  margin-top: 30px;

  .title {
    font-size: 24px;
    color: #333333;
    text-align: center;
  }

  .container {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;

    .line {
      margin-bottom: 10px;
    }
  }
`;

const KnowSC = styled('div')`
  margin-top: 30px;
  margin-bottom: 40px;

  .title {
    font-size: 24px;
    color: #333333;
    text-align: center;
  }
  
  p {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    text-indent: 2em;
    font-size: 12px;
    color: rgba(158, 158, 158, 0.89);
  }
  
  .info {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    font-size: 12px;
    color: rgba(158, 158, 158, 0.89);
  }
  
`;
