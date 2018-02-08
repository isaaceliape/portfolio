import Letter from './components/letter/Letter';
import React from 'react';

export const splitLetters = (text, delay, animate) => {
  const textReplace = text.split('').map((a, i) => {
    const key = `${a}-${i}`;
    return React.createElement(Letter, {key, text: a, delay, animated: animate});
  });
  return (
    <span className="word">
      {textReplace}
    </span>
  );
};

export const getOrientation = () => {
  var mql = window.matchMedia("(orientation: landscape)");
  return mql.matches ? 'landscape' : 'portrait';
}

export const getScreenWidth = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(iOS){
    return getOrientation() === 'landscape' ? window.screen.height : window.screen.width;
  }
  return window.innerWidth;
}

export const getScreenHeight = () => {
  const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if(iOS){
    return getOrientation() === 'landscape' ? window.screen.width : window.screen.height;
  }
  return window.innerHeight;
}