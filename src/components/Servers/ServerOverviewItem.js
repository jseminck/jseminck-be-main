import React from "react";
import './ServerOverviewItem.css';

export default class ServerOverviewItem extends React.Component {
    static propTypes = {
        server: React.PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="server-item-container">
                <div className="server-status" style={{backgroundColor: this.getBackgroundColor()}}></div>
                <div className="server-icon">
                    <i className={this.getFontAwesomeIcon()} />
                </div>
                <div className="server-name">
                    <a href={`http://${this.props.server.link}`}>
                        {this.props.server.name}
                    </a>
                </div>
            </div>
        );
    }

    getFontAwesomeIcon() {
        return `fa fa-3x fa-${this.props.server.faIcon}`;
    }

    getBackgroundColor() {
        const {state} = this.props.server;
        if (state === "loading") {
            return "orange";
        }
        if (state === "online") {
            return "green";
        }
        if (state === "offline") {
            return "red";
        }
    }

    getDelay() {
        return this.props.server.delay > 0 ? ` - ${this.props.server.delay}s` : "";
    }
}
