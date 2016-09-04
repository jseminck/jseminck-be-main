import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../actions';

export class Game extends React.Component {
    static propTypes = {
        onNewGame: React.PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.onNewGame();
    }

    render() {
        return (
            <div>
                Hello World
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {state: state.tranlation};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);