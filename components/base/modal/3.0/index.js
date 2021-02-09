import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Animation from '../../animation/2.0';
import GlobalClose from '../../global-close/2.0';

const fadeIn = keyframes`
  0% {
     opacity: 0;
     transform: scale(0);
  }
  100% {
     opacity: 1;
     transform: scale(1);
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`;

const fadeCss = (aniTrigger) => {
  if (aniTrigger) return css` ${fadeIn} .3s forwards`;
  return css` ${fadeOut} .3s ease-in forwards`;
};

const containerFadeIn = keyframes`
  0% {
    background: rgba(0, 0, 0, 0)
  }
  100% {
    background: rgba(0, 0, 0, .05);  
  }
`;

const containerFadeOut = keyframes`
  0% {
    background: rgba(0, 0, 0, .05)
  }
  100% {
    background: rgba(0, 0, 0, 0);  
  }
`;

const containerFadeCss = (aniTrigger) => {
  if (aniTrigger) return css` ${containerFadeIn} .4s ease forwards`;
  return css` ${containerFadeOut} .4s ease forwards`;
};

const ContainerSC = styled('div', ['aniTrigger'])`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0);
  animation: ${(props) => containerFadeCss(props.aniTrigger)};
`;

const ContainerMockSC = styled('div')`
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const ContentSC = styled('div', ['aniTrigger', 'pos'])`
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  position: relative;
  opacity: 0;
  animation: ${(props) => props.pos && fadeCss(props.aniTrigger)};
  transform-origin:  ${(props) => props.pos?.x}px ${(props) => props.pos?.y}px;
  border-radius: 10px;
`;

const Modal = ({
  visible, closeFunc, content, trigger,
}) => {
  const contentRef = useRef(null);
  const pos = useRef(null);
  const contentInfo = useRef(null);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (contentRef.current) {
      contentInfo.current = {
        width: contentRef.current.firstChild?.offsetWidth,
        height: contentRef.current.firstChild?.offsetHeight,
      };
      setFirstLoad(false);
    }
  }, [contentRef.current]);

  const getTouchPos = (e) => {
    pos.current = {
      // eslint-disable-next-line max-len
      x: e.changedTouches[0].pageX - (document.body.offsetWidth / 2 - contentInfo.current.width / 2),
      // eslint-disable-next-line max-len
      y: e.changedTouches[0].pageY - (document.body.offsetHeight / 2 - contentInfo.current.height / 2),
    };
  };

  const getClickPos = (e) => {
    pos.current = {
      x: e.pageX - (document.body.offsetWidth / 2 - contentInfo.current.width / 2),
      y: e.pageY - (document.body.offsetHeight / 2 - contentInfo.current.height / 2),
    };
  };

  return (
    <>
      <Animation
        visible={visible}
      >
        <ContainerSC>
          <GlobalClose
            onClose={() => closeFunc()}
          >
            <ContentSC
              aniTrigger={visible}
              pos={pos.current}
            >
              {content}
            </ContentSC>
          </GlobalClose>
        </ContainerSC>
      </Animation>
      {
        React.cloneElement(
          trigger,
          {
            onTouchEnd: getTouchPos,
            onClickCapture: getClickPos,
          },
        )
      }
      {
        firstLoad && (
          <ContainerMockSC ssr={false} ref={contentRef}>
            {
              content
            }
          </ContainerMockSC>
        )
      }
    </>
  );
};

Modal.propTypes = {
  config: PropTypes.shape({
    sameOrigin: PropTypes.bool,
  }),
  visible: PropTypes.bool,
  closeFunc: PropTypes.func,
  content: PropTypes.node,
  trigger: PropTypes.node,
  posInitial: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
};

Modal.defaultProps = {
  config: {
    sameOrigin: true,
  },
  visible: true,
  closeFunc: () => { console.log('global close'); },
  content: <div />,
  trigger: <div />,
  posInitial: {
    x: 0,
    y: 0,
  },
};

export default Modal;
