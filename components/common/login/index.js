import dynamic from 'next/dynamic';

const Login = dynamic(() => import('./pc/index'));
export default Login;
