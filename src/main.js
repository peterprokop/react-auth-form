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
      </form>
    );
  }
}

ReactDOM.render(
  <LoginForm />,
  document.getElementById('container')
);