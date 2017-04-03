'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SignUpForm = require('../components/SignUpForm.jsx');

var _SignUpForm2 = _interopRequireDefault(_SignUpForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpPage = function (_React$Component) {
  _inherits(SignUpPage, _React$Component);

  /**
   * Class constructor.
   */
  function SignUpPage(props) {
    _classCallCheck(this, SignUpPage);

    // set the initial component state
    var _this = _possibleConstructorReturn(this, (SignUpPage.__proto__ || Object.getPrototypeOf(SignUpPage)).call(this, props));

    _this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    _this.processForm = _this.processForm.bind(_this);
    _this.changeUser = _this.changeUser.bind(_this);
    return _this;
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */


  _createClass(SignUpPage, [{
    key: 'changeUser',
    value: function changeUser(event) {
      var field = event.target.name;
      var user = this.state.user;
      user[field] = event.target.value;

      this.setState({
        user: user
      });
    }

    /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */

  }, {
    key: 'processForm',
    value: function processForm(event) {
      // prevent default action. in this case, action is the form submission event
      event.preventDefault();

      console.log('name:', this.state.user.name);
      console.log('email:', this.state.user.email);
      console.log('password:', this.state.user.password);
    }

    /**
     * Render the component.
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_SignUpForm2.default, {
        onSubmit: this.processForm,
        onChange: this.changeUser,
        errors: this.state.errors,
        user: this.state.user
      });
    }
  }]);

  return SignUpPage;
}(_react2.default.Component);

exports.default = SignUpPage;
//# sourceMappingURL=SignUpPage.js.map