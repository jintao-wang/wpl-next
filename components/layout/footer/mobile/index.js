import React from 'react';
import styled from 'styled-components';

const Footer = () => (
  <ContainerSC>
    <ContentSC>
      <ContactUsSC>
        <div className="title">客服热线</div>
        <p>营业时间(工作日)：11am-6pm</p>
        <p>营业时间(周末)：12noon-6pm</p>
        <p>
          联系电话：
          <span className="highLine">0141 258 3564</span>
        </p>
        <p>电子邮箱：wplsales@outlook.com</p>
      </ContactUsSC>
      <QRCodeSC>
        <div className="img-group">
          <img className="img" src="/footer/Wechat_1.jpeg" alt="" />
          <div className="word">寄存客服</div>
        </div>
        <div className="img-group">
          <img className="img" src="/footer/Wechat_1.jpeg" alt="" />
          <div className="word">物流客服</div>
        </div>
      </QRCodeSC>
    </ContentSC>
  </ContainerSC>
);
export default Footer;

const ContainerSC = styled.div`
  background: #0d1237;
  padding-bottom: 10px;

`;
const ContentSC = styled.div`
  margin: 0 auto;
  color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const ContactUsSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title {
    color: #d5d7e7;
    font-family: PingFangSC-Light, Microsoft YaHei, Helvetica Neue, Helvetica, STHeiTi, sans-serif;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  p {
    color: #777ca3;;
    font-size: .875rem;
    font-family: PingFangSC-Light, Microsoft YaHei, Helvetica Neue, Helvetica, STHeiTi, sans-serif;
  }

  .highLine {
    color: #fff;
    font-size: 20px;
  }
`;
const QRCodeSC = styled.div`
  margin-top: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .img-group {
    display: inline-flex;
    align-items: center;
    flex-direction: column;

    .img {
      margin-top: 10px;
      height: 100px;
      width: 100px;
    }

    .word {
      margin-top: 0.5rem;
      color: #777ca3;
      font-size: .875rem;
      font-family: PingFangSC-Light, Microsoft YaHei, Helvetica Neue, Helvetica, STHeiTi, sans-serif;
    }
  }
`;
