import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Animation from '../../animation/2.0';

const SuccessIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    width="24"
    height="24"
  >
    <path
      d="M512 149.333333c200.298667 0 362.666667 162.368 362.666667 362.666667s-162.368 362.666667-362.666667 362.666667S149.333333 712.298667 149.333333 512 311.701333 149.333333 512 149.333333z m169.045333 191.04L455.317333 572.650667l-90.944-94.336-46.08 44.416 136.832 141.952 271.829334-279.722667-45.909334-44.586667z"
      fill="#52C41A"
    />
  </svg>
);

const WarningIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    width="24"
    height="24"
  >
    <path
      d="M512 794.026667a44.8 44.8 0 1 1 44.8-44.8A44.8 44.8 0 0 1 512 794.026667z m-40.106667-563.2a40.106667 40.106667 0 0 1 80.213334 0v369.066666a40.106667 40.106667 0 0 1-79.786667 0zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z"
      fill="#FAAE13"
    />
  </svg>
);

const FailedIcon = () => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    width="24"
    height="24"
  >
    <path
      d="M512.697 75.445c-247.539 0-448.208 200.669-448.208 448.208 0 247.54 200.669 448.208 448.208 448.208 247.54 0 448.208-200.668 448.208-448.208 0-247.539-200.668-448.208-448.208-448.208zM690.686 657.208c12.265 12.274 12.265 32.171 0 44.427-12.283 12.274-32.171 12.274-44.453 0l-133.316-133.316-133.327 133.316c-12.274 12.274-32.161 12.274-44.445 0-12.265-12.256-12.265-32.153 0-44.427l133.335-133.353-133.335-133.317c-12.265-12.256-12.265-32.171 0-44.444 12.283-12.256 32.171-12.256 44.445 0l133.327 133.335 133.316-133.335c12.283-12.256 32.171-12.256 44.453 0 12.265 12.274 12.265 32.189 0 44.444l-133.335 133.317 133.335 133.353z"
      fill="#FF4D4F"
    />
  </svg>
);

const getIcon = (icon) => {
  switch (icon) {
    case 'success':
      return <SuccessIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'failed':
      return <FailedIcon />;
    default:
      return null;
  }
};

const NotificationRender = ({
  message,
  description,
  icon,
  imgSrc,
  duration,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, duration || 4000);
  }, []);

  const handleClose = () => {
    setVisible(false);
  };
  return (
    <Animation
      visible={visible}
      onInvisibleAnimationEnd={onClose}
    >
      <ContainerSC icon={icon}>
        <CloseSC onClick={handleClose}>
          <svg
            className="icon"
            viewBox="0 0 1024 1024"
            width="22"
            height="22"
          >
            <path
              d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z"
              fill="rgba(51,51,51,0.5)"
            />
          </svg>
        </CloseSC>
        <div className="title">
          {getIcon(icon)}
          <span>{message}</span>
        </div>
        <div className="description">{description}</div>
        {
          imgSrc && <ImgSC src={imgSrc} />
        }
      </ContainerSC>
    </Animation>
  );
};

const Notification = ({
  icon,
  message,
  description,
  imgSrc,
  duration,
}) => {
  const container = document.createElement('div');
  document.body.append(container);
  const clear = () => {
    ReactDOM.unmountComponentAtNode(container);
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  };
  ReactDOM.render(
    React.createElement(
      NotificationRender,
      {
        icon,
        message,
        description,
        imgSrc,
        duration,
        onClose: clear,
      },
    ),
    container,
  );
};

NotificationRender.propTypes = {
  icon: PropTypes.string || null,
  message: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string || null,
  duration: PropTypes.number,
  onClose: PropTypes.func,
};

NotificationRender.defaultProps = {
  icon: null,
  message: 'wangjintao',
  description: 'I will never close automatically',
  imgSrc: null,
  duration: 4000,
  onClose: () => {},
};

export default Notification;

const notificationFadeIn = keyframes`
  0% {
    right: -240px;
  }
  100% {
    right: 24px;
  }
`;

const notificationFadeOut = keyframes`
  0% {
    right: 24px;
  }
  100% {
    right: -240px;
  }
`;

const notificationFadeCss = (aniTrigger) => {
  if (aniTrigger) return css` ${notificationFadeIn} .2s ease forwards`;
  return css` ${notificationFadeOut} .2s ease forwards`;
};

const ContainerSC = styled('div', 'icon, aniTrigger')`
  width: 240px;
  position: fixed;
  right: -240px;
  top: 24px;
  background: white;
  border-radius: 4px;
  padding: 16px 24px;
  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  animation: ${(props) => notificationFadeCss(props.aniTrigger)};
  z-index: 9999;
  
  .title {
    color: rgba(0,0,0,.85);
    font-size: 16px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    .icon {
      margin-right: 5px;
    }
  }
  .description {
    color: rgba(0,0,0,.85);
    font-size: 14px;
    margin-left: ${props => props.icon && '5px'};
  }
`;
const CloseSC = styled('div')`
  position: absolute;
  right: 15px;
  top: 13px;
  cursor: pointer;
`;
const ImgSC = styled('img')`
  width: inherit;
  margin-top: 20px;
`;
