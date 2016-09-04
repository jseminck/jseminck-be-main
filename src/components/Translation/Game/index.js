import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../actions';

export class Game extends React.Component {
    static propTypes = {
        translations: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,

        actions: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.actions.onNewGame();
    }

    render() {
        const current = this.props.translations[this.props.index] || {};

        return (
            <div>
                {current.translation}
                <button onClick={() => this.props.actions.onNext()}>Next</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state", state);
    return {
        translations: state.translation.translations,
        index: state.translation.index,
        error: state.translation.error
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);