import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/router';
import Modal from '../../../../base/modal/3.0';
import BookingModal from './BookingModal';
import Notification from '../../../../base/notification/1.0';

const Booking = () => {
  const router = useRouter();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [weeks, setWeeks] = useState(0);
  const [maxStart, setMaxStart] = useState(null);
  const [bookingActive, setBookingActive] = useState(false);
  const [oneNumber, setOneNumber] = useState(0);
  const [twoNumber, setTwoNumber] = useState(0);
  const [threeNumber, setThreeNumber] = useState(0);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const [isBookingModal, setBookingModal] = useState(false);

  useEffect(() => {
    const dateInputs = document.getElementsByClassName('react-datepicker__input-container');

    // eslint-disable-next-line no-restricted-syntax
    for (const item of dateInputs) {
      item.firstChild.setAttribute('readonly', 'readonly');
    }
  }, []);

  const clearForm = () => {
    setStartDate(null);
    setEndDate(null);
    setWeeks('');
    setMaxStart(null);
    setOneNumber(0);
    setTwoNumber(0);
    setThreeNumber(0);
    setBookingActive(false);
  };

  const handleBooking = () => {
    const totalNumber = parseInt(oneNumber) + parseInt(twoNumber) + parseInt(threeNumber);
    if (weeks <= 4 && totalNumber > 5) {
      const times = Math.ceil(totalNumber / 5);
      Notification({
        icon: 'warning',
        message: `请分${times}次预定`,
        description: '寄存4周内的，每个订单寄存上限为5箱',
      });
      return;
    }
    const orderInfo = {
      oneNumber,
      twoNumber,
      threeNumber,
      weeks,
      startDate: startDate.getTime(),
      endDate: endDate.getTime(),
    };
    sessionStorage.orderInfo = JSON.stringify(orderInfo);
    router.push('/mobile/deposit/confirm');
  };

  const handleOneNumber = e => {
    setOneNumber(e.target.value);
    checkBookingActive();
  };

  const handleTwoNumber = e => {
    setTwoNumber(e.target.value);
    checkBookingActive();
  };

  const handleThreeNumber = e => {
    setThreeNumber(e.target.value);
    checkBookingActive();
  };

  const handleStartChange = date => {
    setStartDate(date);
    if (endDate !== null) {
      const _startDate = new Date(date);
      const _endDate = new Date(endDate);
      const _weeks = Math.ceil((_endDate - _startDate) / 1000 / 60 / 60 / 24 / 7);
      setWeeks(_weeks);
      if (
        // eslint-disable-next-line radix
        parseInt(oneRef.current.value)
        // eslint-disable-next-line radix
        || parseInt(twoRef.current.value)
        // eslint-disable-next-line radix
        || parseInt(threeRef.current.value)
      ) {
        setBookingActive(true);
      } else {
        setBookingActive(false);
      }
    }
  };
  const handleEndChange = date => {
    const _startDate = new Date(startDate);
    const _endDate = new Date(date);
    const _weeks = Math.ceil((_endDate - _startDate) / 1000 / 60 / 60 / 24 / 7);
    setEndDate(date);
    setWeeks(_weeks);
    setMaxStart(date);
    if (
      // eslint-disable-next-line radix
      parseInt(oneRef.current.value)
      // eslint-disable-next-line radix
      || parseInt(twoRef.current.value)
      // eslint-disable-next-line radix
      || parseInt(threeRef.current.value)
    ) {
      setBookingActive(true);
    } else {
      setBookingActive(false);
    }
  };

  const checkBookingActive = () => {
    setTimeout(() => {
      if (
        (
          // eslint-disable-next-line radix
          parseInt(oneRef.current.value)
          // eslint-disable-next-line radix
          || parseInt(twoRef.current.value)
          // eslint-disable-next-line radix
          || parseInt(threeRef.current.value)
        )
        && weeks
      ) {
        setBookingActive(true);
      } else {
        setBookingActive(false);
      }
    });
  };

  return (
    <ContainerSC>
      <div className="title">寄存预订</div>
      <BookingFormSC>
        <BookingFormContainerSC>
          <InputSC>
            <div>中箱/登机箱数量: </div>
            <input
              value={oneNumber}
              ref={oneRef}
              type="number"
              onChange={handleOneNumber}
            />
          </InputSC>
          <InputSC>
            <div>大箱数量: </div>
            <input
              value={twoNumber}
              ref={twoRef}
              onChange={handleTwoNumber}
              type="number"
            />
          </InputSC>
          <InputSC>
            <div>行李箱/超出尺寸箱数量: </div>
            <input
              value={threeNumber}
              ref={threeRef}
              onChange={handleThreeNumber}
              type="number"
            />
          </InputSC>
          <DateStyleSC selected={startDate}>
            <div>寄存开始时间: </div>
            <DatePicker
              dateFormat="yyyy/MM/dd"
              placeholderText="点击选择开始时间"
              selected={startDate}
              onChange={handleStartChange}
              minDate={new Date()}
              maxDate={maxStart}
              withPortal
            />
          </DateStyleSC>
          <DateStyleSC selected={endDate}>
            <div>寄存结束时间: </div>
            <DatePicker
              dateFormat="yyyy/MM/dd"
              placeholderText="点击选择结束时间"
              selected={endDate}
              onChange={handleEndChange}
              minDate={startDate}
              disabled={!startDate}
              readonly
              withPortal
            />
          </DateStyleSC>
          <InputSC>
            <div>存储周数：</div>
            <input value={weeks} readOnly />
          </InputSC>
          <Modal
            visible={isBookingModal}
            closeFunc={() => setBookingModal(false)}
            content={(
              <BookingModal
                oneNumber={parseInt(oneNumber)}
                twoNumber={parseInt(twoNumber)}
                threeNumber={parseInt(threeNumber)}
                weeks={weeks}
                startDate={startDate}
                endDate={endDate}
                onClose={() => setBookingModal(false)}
                onClear={clearForm}
              />
            )}
            trigger={(
              <BookingSC
                active={bookingActive}
                onClick={
                  () => {
                    if (bookingActive) handleBooking();
                  }
                }
              >
                预订
              </BookingSC>
            )}
          />
          <AttentionSC>
            <div className="special">特别注意事项:</div>
            <div>每件每箱不得超出30KG。如超过限重,取件司机可以拒绝收取或每件每周加罚10镑</div>
            <div className="warm">温馨提示:</div>
            <div>打包过程是比较繁琐的一步,在此为您提供一些建议仅供参考</div>
            <div>
              <ol>
                <li>打包时记得物品分类哦！易碎物品比如碗筷、镜子之类切记必须包装严实固定好位置，有易碎品的箱子一定要标注好。</li>
                <li>使用过的瓶装液体比如化妆品，一定要注意密封和固定，不然在搬运过程中很容易泄露；建议您能用完或者处理掉的话就不要和行李存在一起了，毕竟一存几个月之后很可能都过期了。禁止！放厨房瓶装液体调料！以免搬运途中，漏液，损坏其他人的物品。</li>
                {/* eslint-disable-next-line max-len */}
                <li>封箱前一定要确认箱子中没有易燃易爆等危险品，贵重物品和重要证件也最好不要寄存了，随身携带更安全，所有电器，切记！切记！一定要有防震外包装，以免运输过程损坏。</li>
                <li>请在司机师傅取件前，自行打包好行李用胶带封箱时横竖打＃字，箱体外包装请写好您的寄存订单号码。如因包装原因导致物品损坏，WPL国际物流有限公司 无法承担相应责任。</li>
              </ol>
            </div>
          </AttentionSC>
        </BookingFormContainerSC>
      </BookingFormSC>
    </ContainerSC>
  );
};

export default Booking;

const ContainerSC = styled.div`
    background: #f6f6f6;
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
`;
const BookingFormSC = styled.div`
    width: 100%;
    margin-top: 10px;
    padding: 0 20px;
    box-sizing: border-box;
`;
const BookingFormContainerSC = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputSC = styled.div`
  display: flex;
  color: #333333;
  font-size: 16px;
  width: 100%;
  align-items: center;
  margin-bottom: 8px;
  
  div {
    width: 70%;
  }
  
  input{
    width: 30%;
    height: 34px;
    border-radius: 4px;
    text-align: center;
    border: 1px solid #a7a7a7;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
  }
`;
const DateStyleSC = styled('div', 'selected')`
    display: flex;
    color: #333333;
    font-size: 16px;
    width: 100%;
    align-items: center;
    margin-bottom: 8px;
  
    >div:nth-child(1) {
      width: 70%;
    }
    
    >div:nth-child(2) {
       //margin-left: 15px;
      width: 30%;
      >div{
        display: flex;
        align-items: center;
      }
    }
    
    input {
      width: 100%;
      height: 34px;
      border-radius: 4px;
      text-align: center;
      border: 1px solid #a7a7a7;
      outline: none;
      font-size: ${props => props.selected && '14px'};
      box-sizing: border-box;
    }
`;
const BookingSC = styled('div', 'active')`{
      width: 200px;
      height: 40px;
      margin-top: 25px;
      border-radius: 8px;
      background: ${props => (props.active ? '#0a62b0' : 'rgba(10,98,176,0.6)')};
      color: white;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      letter-spacing: 2px;
      cursor: ${props => props.active ? 'pointer' : ' not-allowed'};
      display: inline-flex;
      margin-left: auto;
    margin-right: auto;
}`;
const AttentionSC = styled.div`
  width: 100%;
  margin-top: 50px;
  color: rgba(51,51,51,0.8);
  
  .special {
    font-size: 20px;
  }
  
  .warm {
    margin-top: 20px;
    font-size: 20px;
  }
  
  li {
    margin-bottom: 10px;
  }
`;
