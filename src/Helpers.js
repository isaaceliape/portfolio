export const getOrientation = () => {
  const mql = window.matchMedia('(orientation: landscape)');
  return mql.matches ? 'landscape' : 'portrait';
};

export const getScreenWidth = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS) {
    return getOrientation() === 'landscape' ? window.screen.height : window.screen.width;
  }
  return window.innerWidth;
};

export const getScreenHeight = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS) {
    return getOrientation() === 'landscape' ? window.screen.width : window.screen.height;
  }
  return window.innerHeight;
};
