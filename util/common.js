export const getTime = (timestamp = null) => {
  // eslint-disable-next-line no-extend-native
  Date.prototype.format = function (fmt) {
    const o = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      // eslint-disable-next-line no-param-reassign
      fmt = fmt.replace(RegExp.$1, (`${this.getFullYear()}`).substr(4 - RegExp.$1.length));
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        // eslint-disable-next-line no-param-reassign,eqeqeq
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
      }
    }
    return fmt;
  };
  if (timestamp) {
    return new Date(timestamp);
  }
  return new Date();
};

export const getUrlParameter = (parameter, url = window.location.href) => {
  const splitIndex = url.indexOf('?');
  const str = url.substring(splitIndex + 1);
  const reg = new RegExp(`(^|&)${parameter}=([^&]*)(&|$)`, 'i');
  const result = str.match(reg);
  if (result != null) {
    return result[2];
  }
  return null;
};

export const UUID8Bit = () => {
  const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A',
    'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];

  let uuid = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 8; ++i) {
    const index = Math.min(Math.floor(Math.random() * 62), 61);
    uuid += chars[index];
  }
  return uuid;
};

export const AnimateJS = ({
  timing,
  draw,
  duration,
}) => {
  const start = performance.now();
  // eslint-disable-next-line no-shadow
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    const progress = timing(timeFraction);
    draw(progress); // 绘制

    if (timeFraction < 1) {
      // eslint-disable-next-line no-unused-vars
      requestAnimationFrame(animate);
    }
  });
};

export const GetObjectId = () => {
  let curId = 1;
  const ids = new Map();

  return function (object) {
    if (!object) {
      curId = 1;
      ids.clear();
      return;
    }

    if (ids.has(object)) {
      // eslint-disable-next-line consistent-return
      return ids.get(object);
    }
    // eslint-disable-next-line no-plusplus
    const id = (curId++).toString();
    ids.set(object, id);
    // eslint-disable-next-line consistent-return
    return id;
  };
};

export const isIpad = process.browser && navigator.userAgent.match(/ipad/i) != null;
export const isIos = process.browser && navigator.userAgent.match(/iphone\sos|ios/i) != null;
export const isMidp = process.browser && navigator.userAgent.match(/midp/i) != null;
export const isUc = process.browser && navigator.userAgent.match(/ucweb/i) != null;
export const isUc7 = process.browser && navigator.userAgent.match(/rv:1.2.3.4/i) != null;
export const isAndroid = process.browser && navigator.userAgent.match(/android/i) != null;
export const isCE = process.browser && navigator.userAgent.match(/windows\sce/i) != null;
export const isWM = process.browser && navigator.userAgent.match(/windows\smobile/i) != null;
export const isMobile = isIpad || isIos || isMidp || isUc || isUc7 || isAndroid || isCE || isWM;
