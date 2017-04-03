'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Card = require('material-ui/Card');

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginForm = function LoginForm(_ref) {
  var onSubmit = _ref.onSubmit,
      onChange = _ref.onChange,
      errors = _ref.errors,
      user = _ref.user;
  return _react2.default.createElement(
    _Card.Card,
    { className: 'container' },
    _react2.default.createElement(
      'form',
      { action: '/', onSubmit: onSubmit },
      _react2.default.createElement(
        'h2',
        { className: 'card-heading' },
        'Login'
      ),
      errors.summary && _react2.default.createElement(
        'p',
        { className: 'error-message' },
        errors.summary
      ),
      _react2.default.createElement(
        'div',
        { className: 'field-line' },
        _react2.default.createElement(_TextField2.default, {
          floatingLabelText: 'Email',
          name: 'email',
          errorText: errors.email,
          onChange: onChange,
          value: user.email
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'field-line' },
        _react2.default.createElement(_TextField2.default, {
          floatingLabelText: 'Password',
          type: 'password',
          name: 'password',
          onChange: onChange,
          errorText: errors.password,
          value: user.password
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'button-line' },
        _react2.default.createElement(_RaisedButton2.default, { type: 'submit', label: 'Log in', primary: true })
      ),
      _react2.default.createElement(
        _Card.CardText,
        null,
        'Don\'t have an account? ',
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/signup' },
          'Create one'
        ),
        '.'
      )
    )
  );
};

LoginForm.propTypes = {
  onSubmit: _react.PropTypes.func.isRequired,
  onChange: _react.PropTypes.func.isRequired,
  errors: _react.PropTypes.object.isRequired,
  user: _react.PropTypes.object.isRequired
};

//export default LoginForm;
//# sourceMappingURL=LoginForm.js.map