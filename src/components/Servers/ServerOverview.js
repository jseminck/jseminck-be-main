import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './serverActions';
import '../../styles/server-overview.css';

export class ServerOverview extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    serverOverview: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.onSetCurrentTime();

    this.props.serverOverview.servers.forEach(server => this.props.actions.onSetState(server));
  }

  render() {
    return (
      <div className="container">
        <div className="container-center">
          {this.props.serverOverview.servers.map((server, i) => {
            return (
              <div key={i} className="server-item">
                {this.getIcon(server.state)}
                <a href={`http://${server.name}.herokuapp.com`}>
                  {server.name}
                </a>
                &mdash;
                {server.heroku}
                {this.getDelay(server.delay)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  getIcon(state) {
    if (state === "loading") {
      return <img src={require("./loading.png")} className="loading-icon" />;
    }
    if (state === "online") {
      return <img src={require("./online.svg")} className="online-icon" />;
    }
    if (state === "offline") {
      return <img src={require("./offline.svg")} className="offline-icon" />;
    }
  }

  getDelay(delay) {
    return delay > 0 ? `(${delay}s)` : "";
  }
}

function mapStateToProps(state) {
  return {serverOverview: state.serverOverview};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerOverview);