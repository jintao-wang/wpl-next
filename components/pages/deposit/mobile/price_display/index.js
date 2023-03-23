import React from 'react';
import styled from 'styled-components';

const PriceDisplay = () => (
  <ContainerSC>
    <div className="title">仓储价格与收费</div>
    <div className="priceTable">
      <div>
        <table>
          <tr>
            <th>寄存箱尺寸</th>
            <th>寄存价格</th>
            <th>存期</th>
            {/*<th>纸箱价格</th>*/}
          </tr>
          <tr>
            <td>吉他/中箱/登机箱 60*40*30cm</td>
            <td>£1.00/周</td>
            <td>无限制</td>
            {/*<td>£3.00/个</td>*/}
          </tr>
          <tr>
            <td>大箱 59*50*37cm</td>
            <td>£2.00/周</td>
            <td>无限制</td>
            {/*<td>£4.00/个</td>*/}
          </tr>
          <tr>
            <td>行李箱/超出尺寸箱（体积重量小于30Kg)</td>
            <td>£3.00/周</td>
            <td>无限制</td>
            {/*<td />*/}
          </tr>
          <tr>
            <td colSpan="4">*体积重量计算公式：长x宽x高/5000</td>
          </tr>
        </table>
      </div>
    </div>
    <AttentionSC>
      <div>寄存服务最低消费标准：</div>
      <div>
        <ol>
          <li>每人最低消费40镑可以免费取送。（寄存4周内的，属于短期寄存，每箱寄存费用双倍，每个订单40镑费用上限5箱，订单数量不限）</li>
          <li>免费取件/返件时间均为周一到周五上午十点至下午四点。周末有加急处理费20镑  week-end handling fee: £20</li>
          <li>保险费用请咨询客服。自带丢失保险50镑，保丢失，不保破损险，10镑 保200镑，20镑保险500镑，上限为500镑。</li>
          <li>寄存4周内的，属于短期寄存，每箱寄存费用双倍，每个订单40镑费用上限5箱，订单数量不限）</li>
        </ol>
      </div>
    </AttentionSC>
  </ContainerSC>
);

export default PriceDisplay;
const ContainerSC = styled.div`
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px;
  box-sizing: border-box;
  
  .title {
    font-size: 28px;
    color: #333333;
    padding-bottom: 8px;    
  }
  
  .priceTable {
     width: 100%;
     
     >div:nth-child(1) {
       width: 100%;
       height: 200px;
       display: flex;
       justify-content:center;
       align-items: center;
       margin-top: 20px;
       margin-bottom: 20px;
     }
     
     table {
        border-collapse:collapse;
        width: 100%;
     }
     
     table, td, th {
        border:1px solid black;
     }
     
     th {
       background: #2964b5;
       height: 40px;
       color: white;
       font-size: 18px;
       font-weight: 500;
     }
     
     td {
       height: 30px;
       text-align:center;
     }
   }
`;
const AttentionSC = styled.div`
  width: 100%;
  margin-top: 20px;
  color: rgba(51,51,51,0.8);
  >div:nth-child(1) {
    font-size: 20px;
  }
  li {
    margin: 3px 0;
  }
`;
