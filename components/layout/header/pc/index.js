import React, { useEffect } from 'react';
import HeaderTop from './headerTop';

import {
  ContainerSC,
} from './style';

const Header = () => {
  useEffect(() => {}, []);

  return (
      <ContainerSC>
          <HeaderTop />
      </ContainerSC>
  );
};

export default Header;
