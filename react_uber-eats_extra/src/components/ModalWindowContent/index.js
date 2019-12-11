import { connect } from 'react-redux';
import { ModalWindowContent } from './ModalWindowContent';
import { openModalWindow } from '../../store/actions';

function mapState2Props(state) {
  return {
    modalWindowData: state.modalWindowData,
    modalWindowUuid: state.modalWindowUuid,
    modalLink: state.modalLink,
    isLoading: state.isLoading,
    error: state.error,
  };
}

const mapDispatch2Props = dispatch => ({
  openModalWindow: (uuid, rule) => dispatch(openModalWindow(uuid, rule)),
});

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(ModalWindowContent);

export { Enhanced as ModalWindowContent };
