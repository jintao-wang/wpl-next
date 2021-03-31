import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/layout/header';
import usePcMobileRedirect from '../../../hooks/usePcMobileRedirect';

export default () => {
  usePcMobileRedirect();

  return (
    <ContainerSC>
      {/* <Header /> */}
      <BannerSC>
        <TitleSC>
          <div className="des">
            <div className="lineLeft" />
            <div className="lineLeft" />
            <div className="lineLeft" />
          </div>
          <div className="word">
            <div className="first">海淘转运</div>
            <div className="second">购物狂欢 中转不用愁</div>
          </div>
          <div className="des">
            <div className="lineRight" />
            <div className="lineRight" />
            <div className="lineRight" />
          </div>
        </TitleSC>
        <ImgOneSC src="/global-shop/641.gif" />
        <WordSC>
          <p className="type_1">买买买，价格诱人却担心无法找到靠谱代收？</p>
          <p className="type_1">多个包裹想要合并转运？</p>
          <p className="type_1">不知如何选择物流线路？</p>
          <p className="type_1">担心包装太差物品损坏？</p>
          <p className="type_2">NO！这些都不是问题！</p>
          <p className="type_1">因为在这里</p>
          <p className="type_1">你有WPL转运~</p>
          <p className="type_2" />
          <p className="type_3">嘻嘻嘻~选择了WPL转运的小伙伴</p>
          <p className="type_3">转运的包裹都已经在路上啦</p>
          <p className="type_3">早下手早收货哦~</p>
          <p className="type_2" />
          <p className="type_4">放心买，放心运</p>
          <p className="type_4">您的满意是我们最大的心愿</p>
        </WordSC>
        <ImgTwoSC src="/global-shop/640.png" />
        <TransferFunctionSC>
          <div className="content">
            <div className="title">
              <span className="icon"># </span>
              <span>转运方式：</span>
            </div>
            <p className="type_1">需要您自己在购物网站下单并填入以下收货信息</p>
            <p className="type_2">下单地址：47 old dumbarton road Glasgow G3 8RF</p>
            <p className="type_1">(该地址为本物流公司地址)</p>
            <p className="type_2">
              <span>电话：</span>
              <a href="tel:07554425921" style={{ color: 'rgba(255,255,255, 0.8)' }}>07554425921</a>
            </p>
            <p className="type_2">收件人姓名：您自己的名字</p>
          </div>

        </TransferFunctionSC>
        <ServiceSC>
          <div className="content">
            <div className="title">
              <span className="icon"># </span>
              <span>特色服务：</span>
            </div>
            <ul className="word">
              <li>
                您可以在英国购物网站直接下单，WPL接受从不同店家、不同时间分批到达本物流公司的
                <span className="weight">多个包裹。</span>
              </li>
              <li>
                从您下单直至所有包裹到达期间，我们会给您
                <span className="weight">免费的签收和仓储</span>
                ，仓储时间最长30天。
              </li>
              <li>
                当您的包裹都到齐以后我们把所有包裹的，会给您一起
                <span className="weight">减重、合并、打包</span>
                。
              </li>
              <li>
                额外签收拍照服务：按包裹数计算，第1个包裹免收费用，第2个包裹起，拍照手续费按20元/个计算，为保证安全高效的服务，我司对
                <span className="weight">所有到店的包裹都拍照反馈</span>
                。
              </li>
              <li>
                提供
                <span className="weight">专业包装</span>
                专业包装，包装费仅需3-5镑/箱，最大限度的保障您物品的完好。
              </li>
              <li>最终邮寄的每个包裹价格按照国际邮费价格表收费，外加专业专业包装费。收费透明，无任何隐形消费。</li>
            </ul>
          </div>
        </ServiceSC>
        <AttentionSC>
          <div className="content">
            <div className="title">
              <span className="icon"># </span>
              <span>注意事项：</span>
            </div>
            <p className="type_1">不能转运奶粉哦！</p>
          </div>
        </AttentionSC>
        <ImgThreeSC src="/global-shop/642.png" />
        <ImgThreeWordSC>仓库已准备好，包裹轰炸来吧~</ImgThreeWordSC>
        <CustomerSC>
          <img src="/global-shop/643.jpeg" alt="" />
          <div className="text">下单后务必尽快联系我们的客服哦，留下您的收件人姓名，这样我们的客服小姐姐能尽快的匹配到您的包裹信息，到货时我们才能第一时间通知您呢！</div>
        </CustomerSC>
        <CustomerSC>
          <img src="/global-shop/644.jpeg" alt="" />
          <div className="text">我们会根据您的物品种类和时效需求，为您匹配到最适合您最优惠的物流线路，坚决不多花一分冤枉钱！</div>
        </CustomerSC>
        <CustomerSC>
          <img src="/global-shop/645.jpeg" alt="" />
          <div className="text">最专业的拆箱、合箱、打包、称重，最大限度保证您的物品安全，所有包裹都将为您拍照反馈，安全高效！</div>
        </CustomerSC>
        <WordTwoSC>
          <p className="type_3">心动不如行动哦！</p>
          <p className="type_3">别的小伙伴都快收到货啦！</p>
          <p className="type_3">你还没开动呢？</p>
          <p className="type_3">限时限量优惠的购物狂欢~</p>
          <p className="type_3">有我们这么贴心的转运</p>
          <p className="type_3">放心大胆的买吧！</p>
        </WordTwoSC>
        <ImgFourSC src="/global-shop/646.gif" />
        <ImgFiveSC src="/global-shop/647.gif" />
        <ImgFiveWordSC>超专业的打包</ImgFiveWordSC>
        <ImgSixSC src="/global-shop/648.gif" />
        <ImgSixWordSC>吉他打包都不在话下！</ImgSixWordSC>
        <ImgSixWordSC>转运/邮寄“高难度”的物品</ImgSixWordSC>
        <ImgSixWordSC>也可以联系我们的客服哦！</ImgSixWordSC>
      </BannerSC>
    </ContainerSC>
  );
};

const ContainerSC = styled.div`
`;

const BannerSC = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: radial-gradient(#9734FA, #7319F9);
  padding: 100px 0;
`;

const TitleSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .des {
    .lineLeft {
      margin: 8px 10px;
      width: 70px;
      height: 10px;
      border-radius: 20px 0px 0px 20px;
      background-image: linear-gradient(
              135deg
              , rgb(206, 159, 252) 10%, rgb(115, 103, 240) 100%);
    }

    .lineRight {
      margin: 8px 10px;
      width: 70px;
      height: 10px;
      border-radius: 0px 20px 20px 0px;
      background-image: linear-gradient(
              135deg
              , rgb(206, 159, 252) 10%, rgb(115, 103, 240) 100%);
    }
  }
  
  .word {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   
    
    .first {
      color: white;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: 4px; 
    }
    
    .second {
      color: rgba(255,255,255,0.8);
      font-size: 14px;
    }
  }
`;

const ImgOneSC = styled.img`
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;

const ImgTwoSC = styled.img`
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;

const ImgThreeSC = styled.img`
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
`;

const ImgThreeWordSC = styled.div`
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  text-shadow: 1px 2px 5px rgba(0,0,0,0.5);
`;

const ImgFourSC = styled.img`
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
`;

const ImgFiveSC = styled.img`
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border-radius: 4px;
`;

const ImgFiveWordSC = styled.div`
  margin-top: 15px;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-weight: 500;
  text-shadow: 1px 2px 5px rgba(0,0,0,0.5);
`;

const ImgSixSC = styled.img`
  width: 80%;
  display: block;
  margin: 40px auto 20px;
  border-radius: 4px;
`;

const ImgSixWordSC = styled.div`
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  font-weight: 500;
  text-shadow: 1px 2px 5px rgba(0,0,0,0.5);
`;

const WordSC = styled.div`
  text-align: center;
  font-size: 15px;
  .type_1 {
    color: white;
  }
  .type_2 {
    margin: 40px 0;
    color: white;
  }

  .type_3 {
    color: rgb(255, 202, 0);
  }

  .type_4 {
    color: white;
    font-weight: 500;
  }
`;

const SectionSC = styled('section', 'background')`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.background};
`;

const ContentSC = styled('div')`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  margin-left: auto;
  margin-right: auto;
`;

const TransferFunctionSC = styled(ContentSC)`
  padding: 20px 10px;
  width: 90%;
  position: relative;
  display: flex;
  height: auto;
  margin-top: 40px;
  box-shadow: 0 5px 40px -1px rgba(2,10,18,.2);
  border-radius: 4px;
  
  .line {
    width: 2px;
    background: white;
  }
  .content {
    .title {
      margin-left: 20px;
      color: white;
      font-size: 24px;
      font-weight: 600;
      
      .icon {
        color: rgb(255, 206, 25);
      }
    }
    .type_1 {
      margin-left: 20px;
      color: rgba(255,255,255, 0.6);
    }
    .type_2 {
      margin-left: 20px;
      color: rgba(255,255,255, 0.8);
      font-weight: 600;
    }
  }
  
`;

const ServiceSC = styled(ContentSC)`
  padding: 20px 10px;
  width: 90%;
  position: relative;
  display: flex;
  height: auto;
  margin-top: 40px;
  box-shadow: 0 5px 40px -1px rgba(2,10,18,.2);
  border-radius: 4px;
  
  .line {
    width: 2px;
    background: white;
  }
  .content {
    .title {
      margin-left: 20px;
      color: white;
      font-size: 24px;
      font-weight: 600;
      
      .icon {
        color: rgb(255, 206, 25);
      }
    }
    .word {
      color: rgba(255,255,255, 0.6);
      
      li {
        margin-bottom: 10px;
      }
      
      .weight {
        color: rgba(255,255,255, 0.9);
        font-weight: 500;
      }
    }
  }
  
`;

const AttentionSC = styled(ContentSC)`
  padding: 20px 10px;
  width: 90%;
  position: relative;
  display: flex;
  height: auto;
  margin-top: 40px;
  box-shadow: 0 5px 40px -1px rgba(2,10,18,.2);
  border-radius: 4px;
  
  .content {
    .title {
      margin-left: 20px;
      color: white;
      font-size: 24px;
      font-weight: 600;
      
      .icon {
        color: rgb(255, 206, 25);
      }
    }
    .type_1 {
      margin-left: 20px;
      color: rgba(255,255,255, 1);
      font-weight: 600;
    }
  }
  
`;

const CustomerSC = styled(ContentSC)`
  width: 90%;
  padding: 5px;
  position: relative;
  margin-top: 40px;
  box-shadow: 0 5px 40px -1px rgba(2,10,18,.2);
  border-radius: 4px;
  overflow: hidden;
  
  img {
    width: 100%;
    border-radius: 4px;
  }
  
  .text {
    margin-top: 10px;
    color: white;
    font-size: 15px;
    text-shadow: 1px 2px 5px rgba(0,0,0,0.5);
  }
`;

const WordTwoSC = styled(ContentSC)`
  text-align: center;
  font-size: 15px;
  margin-top: 40px;

  .type_3 {
    color: rgb(255, 202, 0);
    font-weight: 500;
  }
  
`;
