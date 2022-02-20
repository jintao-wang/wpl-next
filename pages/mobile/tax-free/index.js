import React from 'react';
import styled from 'styled-components';
import Header from '../../../components/layout/header/mobile';
import Footer from "../../../components/layout/footer/mobile";

export default () => (
  <ContainerSC>
    <Header />
    <BannerSC>
      <div className="words">
        <div className="word1">杂货无价值上限包税</div>
        <div className="word2">奢侈品包税</div>
      </div>
    </BannerSC>
    <ContentSC>
      <Table1SC>
        <table
          width="100%"
          border="0"
          align="center"
        >
          <tr>
            <td
              colSpan="6"
              align="center"
              className="title"
            >
              威士忌/香水/杂货 包税无价值上限
            </td>
          </tr>
          <tr className="kg">
            <td>0.01-3.00kg</td>
            <td>3.01-4.00kg</td>
            <td>4.01-5.00kg</td>
            <td>5.01-6.00kg</td>
            <td>6.01-7.00kg</td>
            <td>7.01-8.00kg</td>
          </tr>
          <tr>
            <td>
              £
              <b>35</b>
            </td>
            <td>
              £
              <b>38</b>
            </td>
            <td>
              £
              <b>42</b>
            </td>
            <td>
              £
              <b>46</b>
            </td>
            <td>
              £
              <b>52</b>
            </td>
            <td>
              £
              <b>58</b>
            </td>
          </tr>
        </table>
        <div className="addition">注：以上价格不包括</div>
        <ol className="additional-detail">
          <li>杂货包装费3-6英镑（含纸箱）</li>
          <li>威士忌酒包装费4镑/1-2瓶，7镑/3瓶</li>
          <li>威士忌额外清关费用2镑/瓶</li>
        </ol>
        <div className="insurance">杂税包丢失保险4英镑保价100英镑，单包包裹最高40镑保1000镑保险</div>
      </Table1SC>
      <Table2SC>
        <table
          width="100%"
          border="0"
          align="center"
        >
          <tr>
            <td
              colSpan="7"
              align="center"
              className="title"
            >
              奢侈品100%包税
            </td>
          </tr>
          <tr className="kg">
            <td>1kg</td>
            <td>2kg</td>
            <td>3kg</td>
            <td>4kg</td>
            <td>5kg</td>
            <td>6kg</td>
            <td>7kg</td>
          </tr>
          <tr>
            <td>
              £
              <b>36</b>
            </td>
            <td>
              £
              <b>36</b>
            </td>
            <td>
              £
              <b>54</b>
            </td>
            <td>
              £
              <b>72</b>
            </td>
            <td>
              £
              <b>90</b>
            </td>
            <td>
              £
              <b>108</b>
            </td>
            <td>
              £
              <b>116</b>
            </td>
          </tr>
        </table>
        <div className="addition">注：以上价格不包括奢侈品包装费4英镑（含纸箱）</div>
        <div className="insurance">奢侈品100%包税， 仅付6%的小票价值，即可购买丢失保险，保险上额为1000镑</div>
      </Table2SC>
      <AvailableSC>
        <span className="label">可邮寄物品：</span>
        <span className="content">服装、护肤品、化妆品、母婴食品、保健品、服装配件、饰品、鞋子、包包等</span>
      </AvailableSC>
      <AttentionSC>
        <div className="label">注意：</div>
        <ul className="content">
          <li>{'杂货包邮寄需满足每箱内香水 <= 2瓶(总量 <= 200ml)'}</li>
          <li>{'威士忌 <= 3瓶'}</li>
          <li>{'口红 <= 1kg'}</li>
          <li>{'化妆品单品 <= 18个'}</li>
          <li>杂货包严禁重奢，如：LV、Channel、Hermes等一线品牌的包包及服饰，如需邮寄奢侈品有固定线路。</li>
          <li>奢侈品限重7kg/箱，杂货包限重8kg/箱</li>
          <li>所有包裹体积重量超过实际重量，运费将按照体积重量计算：长*宽*高÷5000</li>
        </ul>
      </AttentionSC>
      <InsuranceSC>
        <span className="label">丢失保险：</span>
        <span className="content">每箱包裹自带丢失险（最高50英镑），保丢不保破损。如需额外购买保险，请联系我们。同时请保存好购物小票</span>
      </InsuranceSC>
    </ContentSC>
    <Footer />
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
    background: url('/tax-free/640.jpg') center / cover;
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
      font-size: 26px;
      letter-spacing: 3px;
      font-weight: 700;
    }

    .word2 {
      margin-top: 15px;
      font-size: 26px;
      letter-spacing: 3px;
      font-weight: 700;
    }
  }
`;

const ContentSC = styled('div')`
  padding: 30px 15px;
  box-sizing: border-box;
`;

const Table1SC = styled('div')`
  width: 100%;
  color: rgb(70, 23, 72);
  
  table {
    border-collapse:collapse;
    
    .title {
      font-weight: 500;
    }
    
    .kg {
      font-size: 14px;
    }

    td {
      padding: 5px;
    }
  }

  table, td, th {
    border:1px solid rgb(102, 23, 50);
  }
  
  .addition {
    font-size: 14px;
    margin-top: 5px;
  }
  
  .additional-detail {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
  }
  
  .insurance {
    font-size: 14px;
  }
`;

const Table2SC = styled('div')`
  width: 100%;
  color: rgb(70, 23, 72);
  margin-top: 30px;
  
  
  table {
    border-collapse:collapse;
    
    .title {
      font-weight: 500;
    }
    
    .kg {
      font-size: 14px;
    }

    td {
      padding: 5px;
    }
  }

  table, td, th {
    border:1px solid rgb(102, 23, 50);
  }
  
  .addition {
    font-size: 14px;
    margin-top: 5px;
  }
  
  .additional-detail {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
  }
  
  .insurance {
    margin-top: 5px;
    font-size: 14px;
  }
`;

const AvailableSC = styled('div')`
  margin-top: 20px;
  .label {
    color: rgb(143, 0, 2);
    font-size: 15px;
  }
  .content {
    color: rgb(34, 7, 12);
    font-size: 14px;
  }
`;

const AttentionSC = styled('div')`
  margin-top: 10px;
  .label {
    color: rgb(143, 0, 2);
    font-size: 15px;
  }
  .content {
    font-size: 14px;
    color: rgb(34, 7, 12);
    margin-bottom: 10px;
  }
`;

const InsuranceSC = styled('div')`
  margin-top: 10px;
  .label {
    color: rgb(143, 0, 2);
    font-size: 15px;
  }
  .content {
    color: rgb(34, 7, 12);
    font-size: 14px;
  }
`;
