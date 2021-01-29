import React, { useState } from 'react';
import styles from './ModalBox.module.css';

import { Button } from 'reactstrap';

import style_list from '../../styles/list';
import function_list from '../../functions/list'; // custom functions object

// This is a custom made modal box with that requires a button to close.
// Needs to be refactor to be more flexible as it currently is for skills specifically
const ModalBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? styles.modalContainer : null}>
      <Button
        style={{
          ...style_list.register.button,

          float: 'right',
          marginTop: -50,
          marginRight: 10,
        }}
        outline
        color="primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        Add
      </Button>
      {isOpen ? (
        <div>
          <div
            style={{
              border: '3px solid #f7fafc',
              boxShadow: '0 2px 4px #11111150',
              backgroundColor: '#d6f3f3',
            }}
            className={styles.modal}
          >
            <button
              style={{ backgroundColor: '#d6f3f3', border: '0' }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <i style={{ color: '#11111150' }} class="fa fa-times"></i>{' '}
            </button>
            {props.component}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ModalBox;
