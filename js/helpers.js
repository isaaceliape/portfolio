
export const removeAllClasses = (elements, className) => {
  let i = 0;
  while (i < elements.length) {
    elements[i].classList.remove(className);
    i += 1;
  }
};

export const addAllClasses = (elements, className) => {
  let i = 0;
  if (Array.isArray(elements)) {
    while (i < elements.length) {
      elements[i].classList.add(className);
      i += 1;
    }
  } else {
    elements.classList.add(className);
  }
};

export const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
