import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Card = ({
  href,
  backgroundImg,
  icon,
  p1,
  p2,
  toLeftColor,
}) => {
  useEffect(() => {}, []);
  return (
    <Link href={href}>
      <ContainerSC>
        <TopPartSC img={backgroundImg}>
          <div className="roundness">
            {icon}
          </div>
        </TopPartSC>
        <ContentPartSC className="fontHover">
          <p>{p1}</p>
          <p>{p2}</p>
        </ContentPartSC>
        <ToLeftSC className="bottomHover" color={toLeftColor}>
          <svg
            width="48"
            height="16"
            viewBox="0 0 2944 1024"
            fill="#fff"
          >
            <g id="icomoon-ignore" />
            <path d="M308.903 254.85h2295.821l-495.275 566.594-79.839-69.791 341.568-390.655-2062.27-0.093z" />
          </svg>
        </ToLeftSC>
      </ContainerSC>
    </Link>
  );
};

Card.propTypes = {
  icon: PropTypes.node,
  p1: PropTypes.string,
  p2: PropTypes.string,
  toLeftColor: PropTypes.string,
  backgroundImg: PropTypes.string,
  href: PropTypes.string,
};
Card.defaultProps = {
  icon: <svg />,
  p1: '包税直邮',
  p2: '(中国)',
  toLeftColor: 'rgba(84,147,224,0.8)',
  backgroundImg: '',
  href: '/',
};

export default Card;

const ContainerSC = styled.div`
  width: 160px;
  height: 200px;
  text-decoration: none;
  font-size: 22px;
  letter-spacing:2px;
  border: 1px solid #eeeeee;
  box-shadow: 0 0 40px -28px rgba(37, 37, 37, 0.8);
  font-family: PingFangSC-Light,Microsoft YaHei,Helvetica Neue,Helvetica,STHeiTi,sans-serif;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  @media (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
  }
    
  p {
      margin: 0;
  }   
  
  :hover .fontHover {
    font-size: 18px !important;
  }
  :hover .bottomHover {
    bottom: 0 !important;
  }
`;

const TopPartSC = styled('div', 'img')`
    width: 100%;
    height: 40%;
    background: white;
    position: relative;
    background: url(${(props) => props.img}) center no-repeat;
    background-size: cover;
    
    .roundness {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        position: absolute;
        background: white;
        left: 0;
        right: 0;
        bottom: -32px;
        margin:auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ContentPartSC = styled('div', ['fontSize'])`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #222432;
    font-size: 16px;
    transition: font-size .3s;
`;
const ToLeftSC = styled('div', ['color'])`
    position: absolute;
    bottom: -30px;
    right: 0;
    width: 64px;
    height: 30px;
    background-image: linear-gradient(to right, #ffffff, ${(props) => props.color});
    color: #ffffff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    transition:bottom .3s;
    
`;
