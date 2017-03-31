'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function () {
  // this is ES6 syntax!
  function Foo(msg) {
    _classCallCheck(this, Foo);

    this.msg = msg;
  }

  _createClass(Foo, [{
    key: 'speak',
    value: function speak() {
      console.log(this.msg);
    }
  }]);

  return Foo;
}();

var ipsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';
ReactDOM.render(React.createElement(
  'div',
  null,
  ipsumText
), document.getElementById('example'));

var f = new Foo('Hi there, console!');
f.speak();
//# sourceMappingURL=main.js.map