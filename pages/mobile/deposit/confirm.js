import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Modal from '../../../components/base/modal/3.0';
import { getTime } from '../../../util/common';
import Notification from '../../../components/base/notification/1.0';
import { CurrentUser } from '../../../constant';
import CommonHeader from '../../../components/base/common_header';

const Confirm = () => {
  const router = useRouter();
  const [isAdd, setAdd] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [errInfo, setErrInfo] = useState(null);
  const [addressInfo, setAddressInfo] = useState(null);
  const [orderInfo, setOrderInfo] = useState(null);
  const [pending, setPending] = useState(false);
  const nameRef = useRef(null);
  const wechatRef = useRef(null);
  const phoneRef = useRef(null);
  const codeRef = useRef(null);
  const addressRef = useRef(null);
  const nameEditRef = useRef(null);
  const phoneEditRef = useRef(null);
  const codeEditRef = useRef(null);
  const addressEditRef = useRef(null);
  useEffect(() => {
    if (sessionStorage.orderInfo) {
      setOrderInfo(JSON.parse(sessionStorage.orderInfo));
    } else {
      router.push('/mobile/deposit');
    }
  }, []);
  const getPrice = () => {
    const oneNumber = parseInt(orderInfo.oneNumber) || 0;
    const twoNumber = parseInt(orderInfo.twoNumber) || 0;
    const threeNumber = parseInt(orderInfo.threeNumber) || 0;
    const weeks = parseInt(orderInfo.weeks) || 0;
    if (weeks <= 4) {
      // eslint-disable-next-line max-len
      const price = (oneNumber + 2 * twoNumber + 3 * threeNumber) * weeks * 2;
      return price <= 40 ? 40 : price;
    }
    if (weeks > 26) {
      // eslint-disable-next-line no-mixed-operators,max-len
      const price = (oneNumber + 2 * twoNumber + 3 * threeNumber) * weeks / 2;
      return price <= 40 ? 40 : price;
    }
    // eslint-disable-next-line max-len
    const price = (oneNumber + 2 * twoNumber + 3 * threeNumber) * weeks;
    return price <= 40 ? 40 : price;
  };

  const handleEditSubmit = () => {
    if (!nameEditRef.current.value) {
      setErrInfo('请填写姓名');
      return;
    }
    if (!phoneEditRef.current.value) {
      setErrInfo('请填写手机号');
      return;
    }
    if (!codeEditRef.current.value) {
      setErrInfo('请填写邮编');
      return;
    }
    if (!addressEditRef.current.value) {
      setErrInfo('请填写地址');
    }
    setAddressInfo({
      name: nameEditRef.current.value,
      wechat: wechatRef.current.value,
      phone: phoneEditRef.current.value,
      code: codeEditRef.current.value,
      address: addressEditRef.current.value,
    });
    setEdit(false);
  };
  const handleAddressSubmit = () => {
    if (!nameRef.current.value) {
      setErrInfo('请填写姓名');
      return;
    }
    if (!phoneRef.current.value) {
      setErrInfo('请填写手机号');
      return;
    }
    if (!codeRef.current.value) {
      setErrInfo('请填写邮编');
      return;
    }
    if (!codeRef.current.value) {
      setErrInfo('请填写地址');
    }
    setAddressInfo({
      name: nameRef.current.value,
      wechat: wechatRef.current.value,
      phone: phoneRef.current.value,
      code: codeRef.current.value,
      address: addressRef.current.value,
    });
  };
  const handleSubmit = async () => {
    if (pending) return;
    if (!addressInfo) {
      Notification({
        icon: 'failed',
        message: '未添加取件地址',
        description: '',
      });
      return;
    }
    setPending(true);
    const params = `oneNumber=${orderInfo.oneNumber}&twoNumber=${orderInfo.twoNumber}&threeNumber=${orderInfo.threeNumber}&startDate=${getTime(orderInfo.startDate).format('yyyy-MM-dd')}&endDate=${getTime(orderInfo.endDate).format('yyyy-MM-dd')}&userName=${addressInfo.name}&userPhone=${addressInfo.phone}&code=${addressInfo.code}&address=${addressInfo.address}`;
    const response = await fetch(
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
    if (response.ok) {
      const result = await response.json();
      if (result.state === 200) {
        setPending(false);
        Notification({
          message: '预订成功！',
          description: '我们会优先通过微信联系您，请留意好友申请。 更改为请您加微信扫码',
          imgSrc: '/footer/Wechat_1.jpeg',
          icon: 'success',
          duration: 100000,
        });
        router.push('/mobile');
      } else {
        setPending(false);
        Notification({
          message: '预订发生错误',
          description: '请重新预订',
          icon: 'failed',
        });
      }
    } else {
      setPending(false);
      Notification({
        message: '预订发生错误',
        description: '请重新预订',
        icon: 'failed',
      });
    }
  };

  return (
    <>
      <CommonHeader title="WPL" />
      <ContainerSC>
        <ContentSC>
          <TopSC>
            <div className="content">
              <Link href="/mobile">
                <img
                  className="logo"
                  src="/wpl_logo.png"
                  alt=""
                />
              </Link>
              <div className="word">确认订单</div>
            </div>
          </TopSC>
          <OrderSC>
            <OrderContentSC>
              <AddressContainerSC>
                <div className="address-title">取件地址</div>
                <div className="address-all">
                  {
                    addressInfo ? (
                      <AddressSC>
                        <div className="name">{addressInfo.name}</div>
                        <div className="phone">{addressInfo.phone}</div>
                        <div className="code">{addressInfo.code}</div>
                        <div className="address">{addressInfo.address}</div>
                        <Modal
                          visible={isEdit}
                          closeFunc={() => setEdit(false)}
                          content={(
                            <AddAddressModalSC>
                              <CloseSC onClick={() => setEdit(false)}>
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
                              <div className="add-title">修改取件地址</div>
                              <div className="add-line">
                                <span className="label">姓名：</span>
                                <input className="input" defaultValue={addressInfo.name} ref={nameEditRef} />
                              </div>
                              <div className="add-line">
                                <span className="label">微信：</span>
                                <input className="input" defaultValue={addressInfo.wechat} ref={addressInfo} />
                              </div>
                              <div className="add-line">
                                <span className="label">电话：</span>
                                <input className="input" type="phone" defaultValue={addressInfo.phone} ref={phoneEditRef} />
                              </div>
                              <div className="add-line">
                                <span className="label">邮编：</span>
                                <input className="input" defaultValue={addressInfo.code} ref={codeEditRef} />
                              </div>
                              <div className="add-line">
                                <span className="label">详细地址：</span>
                                <textarea className="textarea" defaultValue={addressInfo.address} ref={addressEditRef} />
                              </div>
                              <ErrorMessageSC>{errInfo}</ErrorMessageSC>
                              <SubmitSC canClick onClick={handleEditSubmit}>确认</SubmitSC>
                            </AddAddressModalSC>
                            )}
                          trigger={(<div className="edit" onClick={() => setEdit(true)}>修改</div>)}
                        />
                      </AddressSC>
                    )
                      : (
                        <Modal
                          visible={isAdd}
                          closeFunc={() => setAdd(false)}
                          content={(
                            <AddAddressModalSC>
                              <CloseSC onClick={() => setAdd(false)}>
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
                              <div className="add-title">添加取件地址</div>
                              <div className="add-line">
                                <span className="label">姓名：</span>
                                <input className="input" ref={nameRef} />
                              </div>
                              <div className="add-line">
                                <span className="label">微信：</span>
                                <input className="input" ref={wechatRef} />
                              </div>
                              <div className="add-line">
                                <span className="label">电话：</span>
                                <input className="input" type="phone" ref={phoneRef} />
                              </div>
                              <div className="add-line">
                                <span className="label">邮编：</span>
                                <input className="input" ref={codeRef} />
                              </div>
                              <div className="add-line">
                                <span className="label">详细地址：</span>
                                <textarea className="textarea" ref={addressRef} />
                              </div>
                              <ErrorMessageSC>{errInfo}</ErrorMessageSC>
                              <SubmitSC canClick onClick={handleAddressSubmit}>确认</SubmitSC>
                            </AddAddressModalSC>
                          )}
                          trigger={(
                            <AddAddressSC onClick={() => setAdd(true)}>
                              <svg
                                className="icon"
                                viewBox="0 0 1024 1024"
                                width="40"
                                height="40"
                              >
                                <path
                                  d="M512.006827 1020.59008C231.120213 1020.59008 3.413333 792.85248 3.413333 512.003413S231.120213 3.40992 512.006827 3.40992 1020.586667 231.1168 1020.586667 512.003413c0 280.89344-227.730773 508.586667-508.57984 508.586667z m278.278826-537.378133a19.13856 19.13856 0 0 0-19.135146-19.135147h-211.162454V252.914347a19.135147 19.135147 0 0 0-19.135146-19.135147H483.2256a19.135147 19.135147 0 0 0-19.13856 19.135147v211.11808H252.91776a19.135147 19.135147 0 0 0-19.135147 19.13856v57.57952a19.135147 19.135147 0 0 0 19.135147 19.135146h211.121493v211.2a19.135147 19.135147 0 0 0 19.135147 19.13856h57.57952a19.13856 19.13856 0 0 0 19.13856-19.13856v-211.101013h211.2a19.135147 19.135147 0 0 0 19.131733-19.13856l0.06144-57.634133z"
                                  p-id="7335"
                                  fill="#E0E0E0"
                                />
                              </svg>
                              <div className="add">添加新地址</div>
                            </AddAddressSC>
                          )}
                        />
                      )
                  }
                </div>
              </AddressContainerSC>
              <OrderDetailContainerSC>
                <div className="order-title">订单详情</div>
                <div className="order-line">
                  <span className="label">吉他/中箱/登机箱数量: </span>
                  <span className="info">{orderInfo?.oneNumber}</span>
                </div>
                <div className="order-line">
                  <span className="label">大箱数量: </span>
                  <span className="info">{orderInfo?.twoNumber}</span>
                </div>
                <div className="order-line">
                  <span className="label">行李箱/超出尺寸箱数量: </span>
                  <span className="info">{orderInfo?.threeNumber}</span>
                </div>
                <div className="order-line">
                  <span className="label">寄存周数: </span>
                  <span className="info">{orderInfo?.weeks}</span>
                </div>
                <div className="order-line">
                  <span className="label">寄存开始时间: </span>
                  <span className="info">{getTime(orderInfo?.startDate).format('yyyy-MM-dd')}</span>
                </div>
                <div className="order-line">
                  <span className="label">寄存结束时间: </span>
                  <span className="info">{getTime(orderInfo?.endDate).format('yyyy-MM-dd')}</span>
                </div>
                <div className="order-line">
                  <span className="label">寄存价格: </span>
                  <span className="info">
                    £
                    {orderInfo && getPrice()}
                  </span>
                </div>
              </OrderDetailContainerSC>
              <OrderSubmitContainerSC active={!pending}>
                <div className="submit" onClick={handleSubmit}>
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
                </div>
              </OrderSubmitContainerSC>
            </OrderContentSC>
          </OrderSC>
        </ContentSC>
      </ContainerSC>
    </>
  );
};

export default Confirm;
const ContainerSC = styled.div`
`;
const ContentSC = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   flex-direction: column;
`;
const TopSC = styled.div`
 width: 100%;
 padding: 20px 0;
 border-bottom: 4px solid #343399;
 
 .content {
  margin-left: auto;
  margin-right: auto;
   width: 100%;
  display: flex;
  align-items: center;
  .logo {
   height: 36px; 
   cursor: pointer;
  } 
 .word {
  margin-left: 20px;
  font-size: 20px;
   margin-top: 5px;
  color: #424242;
  }
 }
`;

const OrderSC = styled.div`
  width: 100%;
  background: #F5F5F5;
  padding-top: 20px;
`;

const OrderContentSC = styled.div`
  width: 100%;
  min-height: 500px;
  background: white;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding: 36px 24px 0px 24px;
`;

const AddressContainerSC = styled.div`
  .address-title {
    color: #333;
    font-size: 18px;
  }
  .address-all {
    margin-top: 20px;
    display: flex;
  }
`;

const AddressSC = styled.div`
   padding: 15px 24px 30px 24px;
   border: 1px solid #343399;
   width: 250px;
   min-height: 100px;
   margin-right: 17px;
   position: relative;
   
   .name {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
   }
   .code {
    color: #757575;
    margin-bottom: 5px;
   }
   .phone {
    color: #757575;
    margin-bottom: 5px;
   }
   .address {
    color: #757575;
    margin-bottom: 5px;
   }
   .edit {
    display: none;
   }
   :hover .edit {
    display: block;
    color: #343399;
    position: absolute;
    right: 20px;
    bottom: 6px;
    font-size: 14px;
    cursor: pointer;
   }
`;

const AddAddressSC = styled.div`
  border: 1px solid #e0e0e0;
  width: 250px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 24px;
  cursor: pointer;
  
  .add {
    margin-top: 8px;
    color: #b0b0b0;
  }
`;

const AddAddressModalSC = styled.div`
  width: 80vw;
  background: white;
  border-radius: 10px;
  padding: 26px 20px;
  
  .add-title {
    font-size: 18px;
    color: #333333;
    margin-bottom: 20px;
  }
  
  .add-line {
    margin: 10px 0;
    display: flex;
    vertical-align: top;
    
    .label {
      color: #333333;
      width: 100px;
    }
    
    .input {
      height: 24px;
      width: 180px;
      border-radius: 2px;
      border: #e4e6fc solid 1px;
      padding-left: 10px;
      margin-left: 15px;
      outline:none;
    }
    
    .textarea {
      width: 180px;
      height: 100px;
      border-radius: 2px;
      border: #e4e6fc solid 1px;
      padding-left: 10px;
      margin-left: 15px;
      outline:none;
    }
  }
`;
const CloseSC = styled('div')`
  position: absolute;
  right: 15px;
  top: 13px;
  cursor: pointer;
`;
const SubmitSC = styled('div', ['canClick'])`
  margin-left: auto;
  margin-right: auto;
  width: 240px;
  height: 40px;
  outline:none;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  letter-spacing: 10px;
  margin-top: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background:  ${(props) => (props.canClick ? '#0a62b0' : 'rgba(10,98,176,0.6)')};
`;
const ErrorMessageSC = styled('div')`
  text-align: center;
  margin-top: -8px;
  color: red;
  font-size: 13px;
  height: 18px;
`;
const OrderDetailContainerSC = styled.div`
  margin-top: 28px;
  color: #333;

  .order-title { 
    font-size: 18px;
    margin-bottom: 10px;
  }
  .order-line {
    margin: 5px 10px;
    
    .label {
    
    }
  
    .info {
      margin-left: 10px;
      font-weight: bold;
    }
  }
`;

const OrderSubmitContainerSC = styled('div', 'active')`
  margin-top: 25px;
  width: 100%;
  padding: 20px 0;
  border-top: 2px solid #f5f5f5;
  background: white;
  text-align: left;
  box-sizing: border-box;
  
  .submit {
    width: 140px;
    height: 40px;
    outline:none;
    border-radius: 2px;
    color: white;
    font-size: 20px;
    letter-spacing: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${props => (props.active ? '#0a62b0' : 'rgba(10,98,176,0.6)')};
  }
`;
