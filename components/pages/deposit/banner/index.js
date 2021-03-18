import React from 'react';
import styled from 'styled-components';

const Banner = () => (
  <ContainerSC>
    <div className="container">
      <div className="words">
        <div className="word1">WPL仓储寄存</div>
        <div className="word2">免费取件|免费送件</div>
        <div className="word3">最低£1/周</div>
      </div>
    </div>
  </ContainerSC>
)

export default Banner;
const ContainerSC = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  background:  rgb(250, 191, 64) url('/deposit/banner-2.jpg') center / cover;
  
  .container {
     width: 1200px;
     display: flex;
     align-items: center;
     
     .words {
       margin-left: 40px;
       color: rgba(254,254,255,1);
       text-shadow: rgba(0,0,0,1) 5px 0 5px;
      
      .word1 {
        font-size: 50px;
        letter-spacing: 3px;
        font-weight: 700;
      }
      
      .word2 {
        margin-top: 35px;
        font-size: 24px;
        letter-spacing: 4px;
      }
      
      .word3 {
        margin-top: 5px;
        margin-left: 5px;        
        font-size: 20px;
        letter-spacing: 2px;
        color: rgba(254,254,255,0.8);
      }
     }
  }
`;
