import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './loginActions';
import LoginInput from './LoginInput';

import './LoginPage.scss';

export class LoginPage extends React.Component {
  static propTypes = {
      login: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="login">
        <fieldset>
          <legend className="legend">Login</legend>

          <LoginInput
            type="input"
            placeholder="E-mail"
            icon="fa-envelope-o"
            onChange={this.props.actions.onChangeEmail}
            value={this.props.login.email}
          />

          <LoginInput
            type="password"
            placeholder="Password"
            icon="fa-lock"
            onChange={this.props.actions.onChangePassword}
            value={this.props.login.password}
          />

          <button type="submit" className="submit">
            <i className="fa fa-long-arrow-right"></i>
          </button>

        </fieldset>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {login: state.login};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

