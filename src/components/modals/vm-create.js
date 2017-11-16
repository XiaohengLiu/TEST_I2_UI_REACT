import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as vmActions from '../../actions/vm-actions';
import * as modalActions from '../../actions/modal-actions';

class VmCreateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {name: 'name'};

        this.handleInputChange = this.handleInputChange.bind(this)
        this.addVm = this.addVm.bind(this)
    }

    closeModal() {
        this.props.actions.closeModal();
    }

    addVm() {
        this.props.actions.addVm({name: this.state.name, uuid: Math.random()})
        this.props.actions.closeModal();
    }

    handleInputChange(event) {
        switch (event.target.name) {
            case 'name':
                this.setState(Object.assign({}, this.state, {name: event.target.value}));
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title">Create VM</h3>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label className="form-control-label">Name</label>
                        <input type="text" className="form-control" value={this.state.name}
                               name='name' onChange={this.handleInputChange} />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary"
                            onClick={this.addVm}>Create</button>
                    <button type="button" className="btn btn-secondary"
                            onClick={this.closeModal.bind(this)}>Close</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        vms: state.vms
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({...vmActions, ...modalActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VmCreateModal);