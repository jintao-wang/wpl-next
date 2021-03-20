import { useState, useEffect } from 'react';
import { isMobile } from '../util/common';

const useMobile = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile);
  }, []);

  return mobile;
};

export default useMobile;
