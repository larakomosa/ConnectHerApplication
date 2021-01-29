import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import React from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import IndustryForm from '../IndustryForm/IndustryForm';
import Swal from 'sweetalert2';

import function_list from '../../functions/list'; // custom functions object
import style_list from '../../styles/list'; // custom styles object

class IndustryModal extends React.Component {
  state = {
    status: false, //'false' = '+' AND 'true' = '-'
    defaultModal: false,
    isOpen: false,
    isFavorite: false,
  };

  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  cellToggle = () => {
    this.setState({
      status: !this.state.status,
    });
  };

  handleClose = (event) => {
    Swal.fire('Your Industries Have Been Submitted');
    this.setState({
      defaultModal: false,
      isOpen: false,
    });
  };

  render() {
    return (
      <>
        <Button
          block
          outline
          color="primary"
          size="sm"
          onClick={() => this.toggleModal('defaultModal')}
          style={{
            marginLeft: '5px',
            marginTop: '5px',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px #11111150',
            border: '1px solid #AAA',
            marginBottom: '5px',
            height: 45,
            fontFamily: 'cabin',
            fontSize: 15,
            color: '#111111d0',
          }}
        >
          Add Industries
        </Button>
        <Modal
          className="modal-dialog-centered"
          size="lg"
          isOpen={this.state.defaultModal}
          toggle={() => this.toggleModal('defaultModal')}
        >
          <button
            aria-label="Close"
            style={{ backgroundColor: 'white' }}
            className="close m-2 "
            data-dismiss="modal"
            type="button"
            onClick={() => this.toggleModal('defaultModal')}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <ModalBody
            style={{
              backgroundColor: '#d6f3f3',
              boxShadow: '0 2px 4px #11111150',
              borderTop: '1px solid #11111150',
              borderRadius: '0 0 5px 5px',
            }}
          >
            <IndustryForm callback={this.handleClose} />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default connect(mapStoreToProps)(IndustryModal);
