export default class helpers {

  static removeAllClasses(elements, className) {
    let i = 0;
    while (i < elements.length) {
      elements[i].classList.remove(className);
      i += 1;
    }
  }

  static addClass(elements, className) {
    let i = 0;
    if (Array.isArray(elements)) {
      while (i < elements.length) {
        elements[i].classList.add(className);
        i += 1;
      }
    } else {
      elements.classList.add(className);
    }
  }
  static validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
}
