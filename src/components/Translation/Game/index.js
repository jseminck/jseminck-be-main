import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../actions';

export class Game extends React.Component {
    static propTypes = {
        translations: React.PropTypes.array.isRequired,

        actions: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.actions.onNewGame();
    }

    render() {
        return (
            <div>
                {this.props.translations.map(translation => <p key={translation.id}>{translation.english}</p>)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state", state);
    return {
        translations: state.translation.translations,
        error: state.translation.error
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);