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
  height: 30vh;
  display: flex;
  justify-content: center;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url('/deposit/banner-2.jpg') center / cover;
    filter: brightness(70%) blur(2px);
    z-index: -1;
  }
  
  .container {
     width: 100%;
     display: flex;
     align-items: center;
     
     .words {
       margin-left: 40px;
       color: rgba(254,254,255,1);
       text-shadow: rgba(0,0,0,1) 5px 0 5px;
      
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
  }
`;
