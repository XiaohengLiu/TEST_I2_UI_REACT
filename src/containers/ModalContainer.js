import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as modalAction from '../actions/modal-actions'

import VmCreateModal from '../components/modals/vm-create'

class ModalContainer extends Component {
    constructor(props) {
        super(props);
    }

    closeModal() {
        this.props.actions.closeModal();
    }

    renderModal() {
        console.log('rendering modal:  ', this.props);
        let modalType = this.props.modal.currentModal;
        console.log('modal type: ', modalType);
        switch (modalType) {
            case 'vm-create':
                return (<VmCreateModal/>);
            default:
                return null
        }
}

    render() {
        if (this.props.modal.showModal) {
            return (
                <div className="modal-container">
                    <div className="modal-container_canvas"></div>
                    <div className="modal-container_wrapper">
                        {this.renderModal()}
                    </div>
                </div>
            )
        } else {
            return null;
        }

    }
}

const mapStateToProps = (state, props) => {
    return {
        modal: state.modal
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(modalAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);