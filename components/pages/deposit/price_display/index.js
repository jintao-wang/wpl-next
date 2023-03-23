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
      <div>注意事项:</div>
      <div>
        <ol>
          <li>不规则寄存物件请联系客服(单边超过1米也算不规则物件)：0141 258 3564</li>
          <li>寄存超过26周享半价优惠</li>
          <li>最低寄存金额为£30（免费取件送件）</li>
          <li>寄存4周内的，属于短期寄存，寄存上限为5箱，每箱寄存费用双倍</li>
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
  padding: 30px 0;
  
  .title {
    font-size: 28px;
    color: #333333;
    padding-bottom: 8px;    
  }
  
  .priceTable {
     width: 1200px;
     
     >div:nth-child(1) {
       width: 1200px;
       height: 200px;
       display: flex;
       justify-content:center;
       align-items: center;
       margin-top: 20px;
       margin-bottom: 20px;
     }
     
     table {
        border-collapse:collapse;
        width: 1000px;
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
  width: 1000px;
  margin-top: 20px;
  color: rgba(51,51,51,0.8);
  >div:nth-child(1) {
    font-size: 20px;
  }
  li {
    margin: 3px 0;
  }
`;
