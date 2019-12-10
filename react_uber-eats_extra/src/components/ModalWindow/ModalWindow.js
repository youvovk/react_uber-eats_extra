import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ModalWindowContent } from '../ModalWindowContent/index';

import './ModalWindow.scss';

export class ModalWindow extends Component {
  componentDidMount() {
    const { modalWindowUuid, loadModalData } = this.props;

    loadModalData(modalWindowUuid);

    window.addEventListener('resize', this.toggleModalLink);

    if (modalWindowUuid) {
      this.toggleModalLink();
    }
  }

  toggleModalLink = () => {
    const { documentElement: { clientWidth } } = document;
    const { toggleModalLink } = this.props;

    if (Number(clientWidth) < 770) {
      toggleModalLink(true);
    } else if (Number(clientWidth) > 770) {
      toggleModalLink(false);
    }
  }

  render() {
    return <ModalWindowContent />;
  }
}

ModalWindow.propTypes = {
  toggleModalLink: PropTypes.func.isRequired,
  loadModalData: PropTypes.func.isRequired,
  modalWindowUuid: PropTypes.string,
};

ModalWindow.defaultProps = { modalWindowUuid: '' };
