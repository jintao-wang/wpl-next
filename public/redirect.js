{
  const isIpad = navigator.userAgent.match(/ipad/i) != null;
  const isIos = navigator.userAgent.match(/iphone\sos|ios/i) != null;
  const isMidp = navigator.userAgent.match(/midp/i) != null;
  const isUc = navigator.userAgent.match(/ucweb/i) != null;
  const isUc7 = navigator.userAgent.match(/rv:1.2.3.4/i) != null;
  const isAndroid = navigator.userAgent.match(/android/i) != null;
  const isCE = navigator.userAgent.match(/windows\sce/i) != null;
  const isWM = navigator.userAgent.match(/windows\smobile/i) != null;
  const isMobile = isIpad || isIos || isMidp || isUc || isUc7 || isAndroid || isCE || isWM;
  const { pathname } = window.location;

  if (isMobile) {
    if (!window.location.href.includes('mobile')) {
      window.location = `/mobile${pathname}`;
    }
  } else if (window.location.href.includes('mobile')) {
    window.location = pathname.replace('/mobile', '');
  }
}
