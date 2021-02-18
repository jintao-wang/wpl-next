import React, { useEffect } from 'react';
import styled from 'styled-components';

const Footer = () => {
  useEffect(() => {}, []);
  return (
    <ContainerSC>
      <ContentSC>
        <CopyrightSC>
          <img src="/footer/wpl_logo.png" alt="" />
          <p>©Copyright2020 wpl.international版权所有</p>
          <p>违法和不良信息举报电话：0141 258 3564</p>
        </CopyrightSC>
        <AboutUsSC>
          <div className="title">关于我们</div>
          <p>招聘信息</p>
          <p>隐私声明</p>
          <p>服务条款</p>
          <p>保险条款</p>
        </AboutUsSC>
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
};
export default Footer;

const ContainerSC = styled.div`
   background: #0d1237;
`;
const ContentSC = styled.div`
   margin: 0 auto;
   color: #333;
   width: 1200px;
   height: 200px;
   padding: 40px 0 0;
   display: flex;
   justify-content: space-between;
`;
const CopyrightSC = styled.div`
  img {
    width: 105px;
    height: 60px;
    margin-bottom: 2rem;
  }
  p {
    font-size: .75rem;
    color: #4e5169;
  }
`;
const AboutUsSC = styled.div`
  .title {
    color: #d5d7e7;
    font-size: .875rem;
    font-family: PingFangSC-Light,Microsoft YaHei,Helvetica Neue,Helvetica,STHeiTi,sans-serif;
    margin-bottom: 2rem;
  }
  p {
    color: #777ca3;;
    font-size: .875rem;
    font-family: PingFangSC-Light,Microsoft YaHei,Helvetica Neue,Helvetica,STHeiTi,sans-serif;
  }
`;
const ContactUsSC = styled.div`
   .title {
    color: #d5d7e7;
    font-size: .875rem;
    font-family: PingFangSC-Light,Microsoft YaHei,Helvetica Neue,Helvetica,STHeiTi,sans-serif;
    margin-bottom: 2rem;
  }
  p {
    color: #777ca3;;
    font-size: .875rem;
    font-family: PingFangSC-Light,Microsoft YaHei,Helvetica Neue,Helvetica,STHeiTi,sans-serif;
  }
  .highLine {
    color: #fff;
    font-size: 20px;
  }
`;
const QRCodeSC = styled.div`
   margin-top: 1.8rem;
   display: inline-flex;
   
   .img-group {
      display: inline-flex;
      align-items: center;
      flex-direction: column;
      margin-left: 3rem;
      
      .img {
        margin-top: 10px;
        height: 100px;
        width: 100px;
      }
      
      .word {
        margin-top: 0.5rem;
        color: #777ca3;
        font-size: .875rem;
        font-family: PingFangSC-Light,Microsoft YaHei,Helvetica Neue,Helvetica,STHeiTi,sans-serif;
      }
   }
`
