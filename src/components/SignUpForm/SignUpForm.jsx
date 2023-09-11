import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value,
        error: ''
      })
    };

    handleSubmit = async (evt) => {
      evt.preventDefault();
      try {
        const {name, email, password} = this.state;
        const formData = {name, email, password};

        const user = await SignUpForm(formData);
        console.log(user)
      } catch {
        this.setState({ error: 'Sign Up Failed - Please Try Again'});
      }
    };

    render() {
      const disable = this.state.password !== this.state.confirm;
      return (
        <div className="row align-items-center">
          <div className="mx-auto col-10 col-md-8 col-lg-6">
            <h1 className="text-center mb-5">Sign Up</h1>
            <div className="form-container">
              <form className="" autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        </div>
      )
    };
}