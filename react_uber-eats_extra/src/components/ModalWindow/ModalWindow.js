import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ModalWindowContent } from '../ModalWindowContent/index';

import './ModalWindow.scss';

export class ModalWindow extends Component {
  rootEl = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.rootEl);

    const { modalWindowUuid, loadModalData } = this.props;

    loadModalData(modalWindowUuid);
  }

  componentWillUnmount() {
    document.body.removeChild(this.rootEl);
  }

  render() {
    return <ModalWindowContent />;
  }
}

ModalWindow.propTypes = {
  loadModalData: PropTypes.func.isRequired,
  modalWindowUuid: PropTypes.string,
};

ModalWindow.defaultProps = { modalWindowUuid: '' };
