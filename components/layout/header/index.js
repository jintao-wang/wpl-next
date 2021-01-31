import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./pc/index'))
export default Header;
