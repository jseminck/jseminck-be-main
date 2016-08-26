import React from "react";
import './ServerOverviewItem.css';

export default class ServerOverviewItem extends React.Component {
    static propTypes = {
        server: React.PropTypes.object.isRequired
    }

    render() {
        return (
            <div className="server-item">
                <div>
                    <i className={this.getFontAwesomeIcon()} />
                </div>
                <div className="server-item-info">
                    <div>
                        <a href={`http://${this.props.server.link}`}>
                            {this.props.server.name}
                        </a>
                    </div>
                    <div>
                        {this.getIcon(this.props.server.state)}
                        {this.getDelay()}
                    </div>
                </div>
            </div>
        );
    }

    getFontAwesomeIcon() {
        return `fa fa-2x fa-${this.props.server.faIcon}`;
    }

    getIcon() {
        const {state} = this.props.server;
        if (state === "loading") {
            return <img src={require("./loading.png")} className="server-item-info-icon loading-icon" />;
        }
        if (state === "online") {
            return <img src={require("./online.svg")} className="server-item-info-icon online-icon" />;
        }
        if (state === "offline") {
            return <img src={require("./offline.svg")} className="server-item-info-icon offline-icon" />;
        }
    }

    getDelay() {
        return this.props.server.delay > 0 ? ` - ${this.props.server.delay}s` : "";
    }
}
