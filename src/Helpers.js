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

