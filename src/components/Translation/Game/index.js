import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './../actions';
import styles from './Index.scss';

import Buttons from './Buttons';

export class Game extends React.Component {
    static propTypes = {
        translations: React.PropTypes.array.isRequired,
        index: React.PropTypes.number.isRequired,
        show: React.PropTypes.bool,

        actions: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        this.props.actions.onNewGame();
    }

    render() {
        const current = this.props.translations[this.props.index] || {};

        return (
            <div className={styles.container}>
                <h2>{current.translation}</h2>

                <div className={styles.show}>
                    {this.props.show && current.english}
                </div>

                <Buttons {...this.props.actions} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        translations: state.translation.translations,
        index: state.translation.index,
        show: state.translation.show,
        error: state.translation.error
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);