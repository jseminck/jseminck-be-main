import React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './linksActions';

export class LinksPage extends React.Component {
    static propTypes = {
        state: React.PropTypes.object.isRequired,

        actions: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.actions.onLoad();
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
  return {state: state.links};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksPage);