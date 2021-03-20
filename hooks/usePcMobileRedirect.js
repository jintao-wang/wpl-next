import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isMobile } from '../util/common';

const usePcMobileRedirect = () => {
  const router = useRouter();
  useEffect(() => {
    const { protocol, host, pathname } = window.location;
    if (isMobile) {
      if (window.location.href.includes('mobile')) return;
      router.push(`/mobile${pathname}`);
    } else {
      if (!window.location.href.includes('mobile')) return;
      const newPathName = pathname.replace('/mobile', '');
      router.push(newPathName);
    }
  }, []);
};

export default usePcMobileRedirect;
