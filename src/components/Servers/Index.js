import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import ServerOverviewItem from './ServerOverviewItem';
import styles from './Index.css';

export class ServerOverview extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    serverOverview: React.PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.onSetCurrentTime();

    this.props.serverOverview.servers.forEach(server => this.props.actions.onSetState(server));
  }

  render() {
    return (
      <div className={styles.container}>
          {this.props.serverOverview.servers.map((server, i) => {
            return <ServerOverviewItem key={i} server={server} />;
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {serverOverview: state.serverOverview};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerOverview);