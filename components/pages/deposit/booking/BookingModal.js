import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getTime } from '../../../../util/common';
import { CurrentUser } from '../../../../constant';
import Notification from '../../../base/notification/1.0';

const BookingModal = ({
  oneNumber,
  twoNumber,
  threeNumber,
  weeks,
  startDate,
  endDate,
  onClose,
  onClear,
}) => {
  const [pending, setPending] = useState(false);

  const getPrice = () => {
    if (weeks <= 4) {
      const price = (oneNumber + 2 * twoNumber + 3 * threeNumber) * weeks * 2;
      return price <= 30 ? 30 : price;
    }
    if (weeks > 26) {
      // eslint-disable-next-line no-mixed-operators
      const price = (oneNumber + 2 * twoNumber + 3 * threeNumber) * weeks / 2;
      return price <= 30 ? 30 : price;
    }
    const price = (oneNumber + 2 * twoNumber + 3 * threeNumber) * weeks;
    return price <= 30 ? 30 : price;
  };
  const handleSubmit = async () => {
    if (pending) return;
    setPending(true);
    const params = `oneNumber=${oneNumber}&twoNumber=${twoNumber}&threeNumber=${threeNumber
    }&startDate=${startDate}&endDate=${endDate}`;
    fetch(
      'https://europe-west2-wpl-glasgow.cloudfunctions.net/app/depositBooking',
      {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          Authorization: `Bearer ${CurrentUser.info.token}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: params,
      },
    );
    setTimeout(() => {
      fetch(
        'https://europe-west2-wpl-glasgow.cloudfunctions.net/app/depositBooking',
        {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            Authorization: `Bearer ${CurrentUser.info.token}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: params,
        },
      );
    }, 10)
    setTimeout(() => {
      fetch(
        'https://europe-west2-wpl-glasgow.cloudfunctions.net/app/depositBooking',
        {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            Authorization: `Bearer ${CurrentUser.info.token}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: params,
        },
      );
    }, 10)
    // if (response.ok) {
    //   const result = await response.json();
    //   if (result.state === 200) {
    //     setPending(false);
    //     onClose();
    //     onClear();
    //     Notification({
    //       message: '预订成功！',
    //       description: '我们会尽快联系您',
    //       icon: 'success',
    //     });
    //   }
    // }
  };
  return (
    <ContainerSC>
      <CloseSC onClick={onClose}>
        <svg
          t="1612785238881"
          className="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5388"
          width="28"
          height="28"
        >
          <path
            d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z"
            p-id="5389"
            fill="#333333"
          />
        </svg>
      </CloseSC>
      <TitleSC>
        预订信息
      </TitleSC>
      <ContentSC>
        <LineSC>
          <span className="label">吉他/中箱/登机箱数量: </span>
          <span className="info">{oneNumber}</span>
        </LineSC>
        <LineSC>
          <span className="label">大箱数量: </span>
          <span className="info">{twoNumber}</span>
        </LineSC>
        <LineSC>
          <span className="label">行李箱/超出尺寸箱数量: </span>
          <span className="info">{threeNumber}</span>
        </LineSC>
        <LineSC>
          <span className="label">寄存周数: </span>
          <span className="info">{weeks}</span>
        </LineSC>
        <LineSC>
          <span className="label">寄存开始时间: </span>
          <span className="info">{getTime(startDate).format('yyyy-MM-dd')}</span>
        </LineSC>
        <LineSC>
          <span className="label">寄存结束时间: </span>
          <span className="info">{getTime(endDate).format('yyyy-MM-dd')}</span>
        </LineSC>
        <LineSC>
          <span className="label">寄存价格: </span>
          <span className="info">
            £
            {getPrice()}
          </span>
        </LineSC>
        <SubmitSC onClick={handleSubmit} active={!pending}>
          {
            pending ? (
              <svg
                style={{
                  margin: 'auto',
                  display: 'block',
                  shapeRendering: 'auto',
                }}
                width="32px"
                height="32px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <g transform="rotate(0 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="rotate(30 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="rotate(60 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="rotate(90 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="rotate(120 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="rotate(150 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="rotate(180 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="rotate(210 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="rotate(240 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="rotate(270 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="rotate(300 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" />
                  </rect>
                </g>
                <g transform="rotate(330 50 50)">
                  <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#ffffff">
                    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
                  </rect>
                </g>
              </svg>
            )
              : <span>确认</span>
          }
        </SubmitSC>
      </ContentSC>
    </ContainerSC>
  );
};

BookingModal.propTypes = {
  oneNumber: PropTypes.number,
  twoNumber: PropTypes.number,
  threeNumber: PropTypes.number,
  weeks: PropTypes.number,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  onClose: PropTypes.func,
  onClear: PropTypes.func,
};
BookingModal.defaultProps = {
  oneNumber: 1,
  twoNumber: 1,
  threeNumber: 1,
  weeks: 1,
  startDate: new Date(),
  endDate: new Date(),
  onClose: () => {},
  onClear: () => {},
};

export default BookingModal;

const ContainerSC = styled.div`
  width: 400px;
  height: 355px;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  position: relative;
`;
const TitleSC = styled.div`
  text-align: center;
  font-size: 22px;
  letter-spacing: 4px;
  color: #333333;
`;
const CloseSC = styled('div')`
  position: absolute;
  right: 15px;
  top: 13px;
  cursor: pointer;
`;
const ContentSC = styled.div`
  width: 100%;
  font-size: 18px;
  color: #333333;
  margin-top: 20px;
`;
const LineSC = styled.div`
  margin: 3px 0 7px 20px;
  
  .label {
  
  }
  
  .info {
    margin-left: 10px;
    font-weight: bold;
  }
`;
const SubmitSC = styled('div', 'active')`
  width: 50%;
  background: ${props => (props.active ? '#0a62b0' : 'rgba(10,98,176,0.6)')};
  border-radius: 8px;
  color: white;
  text-align: center;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center; 
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  cursor: pointer;
  letter-spacing: 4px;
`;