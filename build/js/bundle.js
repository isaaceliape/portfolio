(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    this.el = this.app.el.querySelector('.nav');
    this.btnClose = this.el.querySelector('.close');
    this.links = [].concat(_toConsumableArray(this.el.querySelectorAll('.link')));

    this.links.forEach(function (el) {
      el.addEventListener('click', function (event) {
        var pageId = event.currentTarget.dataset.pageId;

        _this.gotoPage(pageId);
      });
    });
    this.app.menu.addEventListener('click', this.open.bind(this));

    this.btnClose.addEventListener('click', this.close.bind(this));
    this.btnClose.addEventListener('mouseover', function () {
      _this.app.cursor.classList.add('rotate');
    });

    this.btnClose.addEventListener('mouseleave', function () {
      _this.app.cursor.classList.remove('rotate');
    });
  }

  _createClass(Navegation, [{
    key: 'gotoPage',
    value: function gotoPage(pageId) {
      this.close();
      this.app.data.pages[this.app.data.currentPage].hide();
      this.app.data.currentPage = pageId;
      this.app.data.pages[this.app.data.currentPage].show();
    }
  }, {
    key: 'open',
    value: function open() {
      console.log('nav open');
      this.el.classList.add('show');
      this.app.cursor.classList.add('white');
    }
  }, {
    key: 'close',
    value: function close() {
      console.log('nav close');
      this.app.cursor.classList.remove('white');
      this.el.classList.remove('show');
    }
  }, {
    key: 'hide',
    value: function hide() {}
  }, {
    key: 'show',
    value: function show() {}
  }]);

  return Navegation;
}();

exports.default = Navegation;

},{}],2:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    // INITIAL RULES
    this.isMobile = window.isMobile;
    this.currentPage = 'home';
    this.el = document.body;
    this.data = {
      currentPage: 'home',
      pages: {
        home: new _Home2.default(this),
        awards: new _Awards2.default(this),
        about: new _About2.default(this),
        services: new _Services2.default(this)
      }
    };

    this.data.pages.home.show();
  }

  _createClass(App, [{
    key: 'init',
    value: function init() {
      console.log('INIT APP =]');
      this.menu = document.querySelector('.menu');
      this.cursor = document.querySelector('.cursor');

      this.Nav = new _Nav2.default(this);

      window.addEventListener('mousemove', this.onMouseMove.bind(this));
    }
  }, {
    key: 'onMouseMove',
    value: function onMouseMove(event) {
      var x = event.pageX,
          y = event.pageY;

      this.cursor.style.left = x + 'px';
      this.cursor.style.top = y + 'px';
    }
  }]);

  return App;
}();

window.app = new App();
document.addEventListener('DOMContentLoaded', window.app.init(window.app));

},{"./components/Nav":1,"./pages/About":3,"./pages/Awards":4,"./pages/Home":5,"./pages/Services":6}],3:[function(require,module,exports){
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
    this.btnClose = this.el.querySelector('.close');
    this.callToAction = this.el.querySelector('.call-to-action .marquee');
    this.marquee = this.el.querySelector('.call-to-action .marquee');

    this.marquee.addEventListener('mouseover', function () {
      _this.app.cursor.classList.add('white');
      _this.el.classList.add('black');
    });
    this.marquee.addEventListener('mouseleave', function () {
      _this.app.cursor.classList.remove('white');
      _this.el.classList.remove('black');
    });

    this.btnClose.addEventListener('mouseover', function () {
      _this.app.cursor.classList.add('rotate');
    });

    this.btnClose.addEventListener('mouseleave', function () {
      _this.app.cursor.classList.remove('rotate');
    });

    this.btnClose.addEventListener('click', function () {
      _this.app.Nav.gotoPage('home');
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

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Awards = function () {
  function Awards(app) {
    _classCallCheck(this, Awards);

    this.app = app;
    this.el = this.app.el.querySelector('section.awards');
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

},{}],5:[function(require,module,exports){
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
    this.projectItens = [].concat(_toConsumableArray(this.el.querySelectorAll('.project-item')));
    this.projectImages = [].concat(_toConsumableArray(this.el.querySelectorAll('.project-image')));

    this.projectItens.forEach(function (el) {
      el.addEventListener('mouseover', function (event) {
        var projectId = event.currentTarget.dataset.projectId;

        _this.projectImages.forEach(function (img) {
          img.classList.remove('show');
        });
        var image = _this.projectImages.find(function (x) {
          return x.dataset.projectId === projectId;
        });

        image.classList.add('show');
        _this.el.classList.add('black');
        _this.app.cursor.classList.add('white');
        event.currentTarget.classList.add('white');
      });

      el.addEventListener('mouseleave', function (event) {
        event.currentTarget.classList.remove('white');
        _this.el.classList.remove('black');
        _this.app.cursor.classList.remove('white');
        _this.projectImages.forEach(function (img) {
          img.classList.remove('show');
        });
      });
    });
  }

  _createClass(Home, [{
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

  return Home;
}();

exports.default = Home;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Services = function () {
  function Services(app) {
    _classCallCheck(this, Services);

    this.app = app;
    this.el = this.app.el.querySelector('section.services');
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

},{}]},{},[2])

//# sourceMappingURL=bundle.js.map
