'use strict';

//import SignUpForm from 'components/SignUpForm.jsx';

/*
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
      	<label>
          Email:
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>

        <br />

        <label>
          Password:
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
        </label>

        <br />

        <input type="submit" />
      </form>
    );
  }
}
*/

ReactDOM.render(React.createElement(SignUpForm, {
  onSubmit: function onSubmit(e) {
    return console.log('submitted');
  },
  onChange: function onChange(e) {
    return console.log('changed');
  },
  errors: { email: 'Invalid' },
  user: { email: 'jane@doe.com', name: 'Jane Doe' }
}), document.getElementById('container'));
//# sourceMappingURL=main.js.map