(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cursor = function () {
  function Cursor(app) {
    _classCallCheck(this, Cursor);

    this.app = app;
    this.el = app.el.querySelector('.cursor');

    window.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  _createClass(Cursor, [{
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var x = event.pageX,
          y = event.pageY;

      this.el.style.left = x + 'px';
      this.el.style.top = y + 'px';
    }
  }]);

  return Cursor;
}();

exports.default = Cursor;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navegation = function () {
  function Navegation(app) {
    var _this = this;

    _classCallCheck(this, Navegation);

    this.app = app;
    this.el = app.el.querySelector('.nav');
    this.btnClose = this.el.querySelector('.close');
    this.links = [].concat(_toConsumableArray(this.el.querySelectorAll('.link')));

    this.links.forEach(function (el) {
      el.addEventListener('click', function (event) {
        var pageId = event.currentTarget.dataset.pageId;

        _this.gotoPage(pageId);
      });
    });

    this.app.menu.addEventListener('click', this.show.bind(this));

    this.btnClose.addEventListener('click', this.hide.bind(this));
    this.btnClose.addEventListener('mouseover', function () {
      _this.app.Cursor.el.classList.add('rotate');
    });

    this.btnClose.addEventListener('mouseleave', function () {
      _this.app.Cursor.el.classList.remove('rotate');
    });
  }

  _createClass(Navegation, [{
    key: 'gotoPage',
    value: function gotoPage(pageId) {
      this.hide();
      this.app.pages[this.app.currentPage].hide();
      this.app.currentPage = pageId;
      this.app.pages[this.app.currentPage].show();
    }
  }, {
    key: 'show',
    value: function show() {
      this.el.classList.add('show');
      this.app.Cursor.el.classList.add('white');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.app.Cursor.el.classList.remove('white');
      this.el.classList.remove('show');
    }
  }]);

  return Navegation;
}();

exports.default = Navegation;

},{}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Nav = require('./components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Home = require('./pages/Home');

var _Home2 = _interopRequireDefault(_Home);

var _About = require('./pages/About');

var _About2 = _interopRequireDefault(_About);

var _Awards = require('./pages/Awards');

var _Awards2 = _interopRequireDefault(_Awards);

var _Services = require('./pages/Services');

var _Services2 = _interopRequireDefault(_Services);

var _Cursor = require('./components/Cursor');

var _Cursor2 = _interopRequireDefault(_Cursor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    // INITIAL RULES
    this.isMobile = window.isMobile;
    this.currentPage = 'home';
    this.el = document.body;
    this.currentPage = 'home', this.pages = {};
    this.projects = [{
      description: 'the first book written by people who’ve never written before.',
      id: 'hpmagicwords',
      tecnologies: ['html5/css3', 'javascript', 'custom framework'],
      link: 'https://www.hpmagicwords.com.br/tool/'
    }, {
      description: 'creating protraits of famous people with gettyimages photos',
      id: 'gettyendeless',
      tecnologies: ['html5/css3', 'javascript', 'webGL'],
      link: 'http://www.gettyendless.com/'
    }, {
      description: 'responsive semplice-based portfolio',
      id: 'flplny',
      tecnologies: ['html5/css3', 'javascript', 'animations', 'wordpress'],
      link: 'http://flplny.com/'
    }, {
      description: 'cms and responsive website',
      id: 'fundacaolemann',
      tecnologies: ['html5/css3', 'javascript', 'wordpress'],
      link: 'http://www.fundacaolemann.org.br/'
    }];
  }

  _createClass(App, [{
    key: 'init',
    value: function init() {
      console.log('INIT APP =]');

      this.menu = document.querySelector('.menu');
      this.pages = {
        home: new _Home2.default(this),
        awards: new _Awards2.default(this),
        about: new _About2.default(this),
        services: new _Services2.default(this)
      };

      this.Cursor = new _Cursor2.default(this);
      this.Nav = new _Nav2.default(this);

      this.pages.home.show();
    }
  }]);

  return App;
}();

window.app = new App();
document.addEventListener('DOMContentLoaded', window.app.init(window.app));

},{"./components/Cursor":1,"./components/Nav":2,"./pages/About":4,"./pages/Awards":5,"./pages/Home":6,"./pages/Services":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var About = function () {
  function About(app) {
    var _this = this;

    _classCallCheck(this, About);

    this.app = app;
    this.el = this.app.el.querySelector('section.about');
    this.closeBtn = this.el.querySelector('.close');
    this.marquee = this.el.querySelector('.call-to-action .marquee');

    this.marquee.addEventListener('mouseover', function () {
      _this.app.Cursor.el.classList.add('white');
      _this.el.classList.add('black');
    });

    this.marquee.addEventListener('mouseleave', function () {
      _this.app.Cursor.el.classList.remove('white');
      _this.el.classList.remove('black');
    });

    this.closeBtn.addEventListener('click', function () {
      _this.app.Cursor.el.classList.add('rotate');
      _this.app.Nav.gotoPage('home');
    });

    this.closeBtn.addEventListener('mouseover', function () {
      _this.app.Cursor.el.classList.add('rotate');
    });

    this.closeBtn.addEventListener('mouseleave', function () {
      _this.app.Cursor.el.classList.remove('rotate');
    });
  }

  _createClass(About, [{
    key: 'show',
    value: function show() {
      this.el.classList.add('show');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.el.classList.remove('show');
    }
  }, {
    key: 'open',
    value: function open() {}
  }, {
    key: 'close',
    value: function close() {}
  }]);

  return About;
}();

exports.default = About;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Awards = function () {
  function Awards(app) {
    var _this = this;

    _classCallCheck(this, Awards);

    this.app = app;
    this.el = this.app.el.querySelector('section.awards');
    this.closeBtn = this.el.querySelector('.close');

    this.closeBtn.addEventListener('click', function () {
      _this.app.Cursor.el.classList.add('rotate');
    });

    this.closeBtn.addEventListener('click', function () {
      _this.app.Nav.gotoPage('home');
    });

    this.closeBtn.addEventListener('mouseover', function () {
      _this.app.Cursor.el.classList.add('rotate');
    });

    this.closeBtn.addEventListener('mouseleave', function () {
      _this.app.Cursor.el.classList.remove('rotate');
    });
  }

  _createClass(Awards, [{
    key: 'show',
    value: function show() {
      this.el.classList.add('show');
      this.app.menu.classList.remove('show');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.el.classList.remove('show');
    }
  }, {
    key: 'open',
    value: function open() {}
  }, {
    key: 'close',
    value: function close() {}
  }]);

  return Awards;
}();

exports.default = Awards;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Home = function () {
  function Home(app) {
    var _this = this;

    _classCallCheck(this, Home);

    this.app = app;
    this.el = this.app.el.querySelector('section.home');
    this.projectWrapper = this.el.querySelector('.project-wrapper');
    this.projectHitArea = this.projectWrapper.querySelector('.project-hit-area');
    this.projectDescription = this.projectWrapper.querySelector('.description');
    this.projectLink = this.projectWrapper.querySelector('.project-link .marquee');
    this.projectTechs = this.projectWrapper.querySelector('.list-itens');
    this.closeProjectBtn = this.projectWrapper.querySelector('.close');
    this.projectContent = this.projectWrapper.querySelector('.project-content');
    this.projectItens = [].concat(_toConsumableArray(this.el.querySelectorAll('.project-item[data-project-id]')));
    this.projectImages = [].concat(_toConsumableArray(this.el.querySelectorAll('.project-image')));

    this.openProject = this.openProject.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.closeProject = this.closeProject.bind(this);
    this.mouseOverProjectLink = this.mouseOverProjectLink.bind(this);
    this.mouseLeaveProjectLink = this.mouseLeaveProjectLink.bind(this);
    this.mouseOverProjectContent = this.mouseOverProjectContent.bind(this);
    this.mouseLeaveProjectContent = this.mouseLeaveProjectContent.bind(this);

    this.closeProjectBtn.addEventListener('mouseover', function () {
      _this.app.Cursor.el.classList.add('rotate');
    });

    this.closeProjectBtn.addEventListener('mouseleave', function () {
      _this.app.Cursor.el.classList.remove('rotate');
    });

    this.closeProjectBtn.addEventListener('click', this.closeProject);
    this.projectHitArea.addEventListener('click', this.closeProject);

    this.addListeners();
  }

  _createClass(Home, [{
    key: 'mouseOverProjectLink',
    value: function mouseOverProjectLink(event) {
      var projectId = event.currentTarget.dataset.projectId;

      this.projectImages.forEach(function (img) {
        img.classList.remove('show');
      });
      var image = this.projectImages.find(function (x) {
        return x.dataset.projectId === projectId;
      });

      image.classList.add('show');
      this.el.classList.add('black');
      this.app.Cursor.el.classList.add('white');
      event.currentTarget.classList.add('white');
    }
  }, {
    key: 'mouseLeaveProjectLink',
    value: function mouseLeaveProjectLink(event) {
      event.currentTarget.classList.remove('white');
      this.el.classList.remove('black');
      this.app.Cursor.el.classList.remove('white');
      this.projectImages.forEach(function (img) {
        img.classList.remove('show');
      });
    }
  }, {
    key: 'openProject',
    value: function openProject(event) {
      var projectId = event.currentTarget.dataset.projectId;

      var image = this.projectImages.find(function (x) {
        return x.dataset.projectId == projectId;
      });

      var _app$projects$find = this.app.projects.find(function (x) {
        return x.id == projectId;
      }),
          description = _app$projects$find.description,
          link = _app$projects$find.link,
          tecnologies = _app$projects$find.tecnologies;

      var techList = '';
      tecnologies.forEach(function (item) {
        techList += '<li class="tech-item">' + item + '</li>';
      });

      this.app.menu.classList.remove('show');
      this.projectDescription.innerText = description;
      this.projectLink.setAttribute('href', link);
      this.projectTechs.innerHTML = techList;

      image.classList.add('opened');
      this.projectWrapper.classList.add('show');

      this.projectContent.addEventListener('mouseover', this.mouseOverProjectContent);
      this.projectContent.addEventListener('mouseleave', this.mouseLeaveProjectContent);

      this.removeListener();
    }
  }, {
    key: 'closeProject',
    value: function closeProject() {
      this.removeListener();
      this.projectContent.removeEventListener('mouseover', this.mouseOverProjectContent);
      this.projectContent.removeEventListener('mouseleave', this.mouseLeaveProjectContent);

      var image = this.el.querySelector('.project-image.show.opened');
      var currentProjectItem = this.el.querySelector('.project-item.white');
      image.classList.remove('opened');
      image.classList.remove('show');
      currentProjectItem.classList.remove('white');
      this.el.classList.remove('black');
      this.projectWrapper.classList.remove('show');
      this.app.Cursor.el.classList.remove('white');
      this.app.menu.classList.add('show');
      setTimeout(this.addListeners, 500);
    }
  }, {
    key: 'mouseOverProjectContent',
    value: function mouseOverProjectContent() {
      this.app.Cursor.el.classList.remove('white');
    }
  }, {
    key: 'mouseLeaveProjectContent',
    value: function mouseLeaveProjectContent() {
      this.app.Cursor.el.classList.add('white');
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      var _this2 = this;

      this.projectItens.forEach(function (el) {
        el.addEventListener('mouseover', _this2.mouseOverProjectLink, true);
        el.addEventListener('mouseleave', _this2.mouseLeaveProjectLink, true);
        el.addEventListener('click', _this2.openProject, true);
      });
    }
  }, {
    key: 'removeListener',
    value: function removeListener() {
      var _this3 = this;

      this.projectItens.forEach(function (el) {
        el.removeEventListener('mouseover', _this3.mouseOverProjectLink, true);
        el.removeEventListener('mouseleave', _this3.mouseLeaveProjectLink, true);
        el.removeEventListener('click', _this3.openProject, true);
      });
    }
  }, {
    key: 'show',
    value: function show() {
      this.el.classList.add('show');
      this.app.menu.classList.add('show');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.app.menu.classList.remove('show');
      this.el.classList.remove('show');
    }
  }]);

  return Home;
}();

exports.default = Home;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Services = function () {
  function Services(app) {
    var _this = this;

    _classCallCheck(this, Services);

    this.app = app;
    this.el = this.app.el.querySelector('section.services');
    this.closeBtn = this.el.querySelector('.close');

    this.closeBtn.addEventListener('click', function () {
      _this.app.Cursor.el.classList.add('rotate');
    });

    this.closeBtn.addEventListener('click', function () {
      _this.app.Nav.gotoPage('home');
    });

    this.closeBtn.addEventListener('mouseover', function () {
      _this.app.Cursor.el.classList.add('rotate');
    });

    this.closeBtn.addEventListener('mouseleave', function () {
      _this.app.Cursor.el.classList.remove('rotate');
    });
  }

  _createClass(Services, [{
    key: 'show',
    value: function show() {
      this.el.classList.add('show');
      this.app.menu.classList.remove('show');
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.el.classList.remove('show');
    }
  }, {
    key: 'open',
    value: function open() {}
  }, {
    key: 'close',
    value: function close() {}
  }]);

  return Services;
}();

exports.default = Services;

},{}]},{},[3])

//# sourceMappingURL=bundle.js.map
