import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class SettingGear extends Component {
    constructor(props) {
        super(props);
        console.log('setting gear props: ', this.props);
        this.state = {showGear: false};

        this.bound_handleClickOutside = this.handleClickOutside.bind(this);
    }

    toggleMenu() {
        this.setState({showGear: !this.state.showGear});
    }

    handleOperation(operation) {
        switch(operation) {
            case 'logout':
                this.props.actions.logout({
                    username: this.props.auth.username
                });
                break;

            default:
        }
    }

    render() {
        const settings = this.props.auth.operations.map((operation) => {
            return (
                <li key={operation}
                    onClick={this.handleOperation.bind(this, operation)}>{operation}</li>
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

    componentDidMount() {
        document.addEventListener('click', this.bound_handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.bound_handleClickOutside, true);
    }

    handleClickOutside(event) {
        const domNode = ReactDOM.findDOMNode(this);
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                showGear : false
            });
        }
    }
}

export default SettingGear;