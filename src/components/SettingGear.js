import React, {Component} from 'react';

class SettingGear extends Component {
    constructor(props) {
        super(props);
        this.state = {showGear: false};
    }

    toggleMenu() {
        this.setState({showGear: !this.state.showGear});
    }

    render() {
        const settings = this.props.auth.operations.map((operation) => {
            return (
                <li>{operation}</li>
            )
        });

        const showGear = this.state.showGear;
        let menu = null;
        if (showGear) {
            menu = <ul className="setting-gear_list" >{settings}</ul>
        }

        return (
            <div className="setting-gear">
                <div className="setting-gear_cog">
                    <span className="glyphicon glyphicon-cog glyph-control" area-hidden="true"
                          title="System Controls" onClick={this.toggleMenu.bind(this)}>
                    </span>
                </div>
                {menu}
            </div>
        );
    }
}

export default SettingGear;