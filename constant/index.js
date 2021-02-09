const info = {
  displayName: null,
  email: null,
  emailVerified: null,
  phoneNumber: null,
  photoURL: null,
  uid: null,
  token: null,
  refreshToken: null,
};

const setInfo = (newInfo) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(newInfo)) {
    info[key] = value;
  }
  return info;
};

const clearInfo = () => {
  info.displayName = null;
  info.email = null;
  info.emailVerified = null;
  info.phoneNumber = null;
  info.photoURL = null;
  info.uid = null;
  info.token = null;
  info.refreshToken = null;
};

export const CurrentUser = {
  info,
  set: setInfo,
  clear: clearInfo,
};
