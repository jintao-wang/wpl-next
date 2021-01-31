import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChineseFlag from '../../static/china.svg';

const HeaderTop = ({}) => {
  useEffect(() => {}, []);

  return (
    <ContainerSC>
      <ContentSC>
        <div className="language">
          <img src={ChineseFlag} alt="" />
          <span>中文</span>
        </div>
        <div className="sign" />
      </ContentSC>
    </ContainerSC>
  );
};

export default HeaderTop;

const ContainerSC = styled.div`
  background: rgba(45,45,45,1);
`;
const ContentSC = styled.div`
  max-width: 1160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: white;
  padding: 6px 20px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
