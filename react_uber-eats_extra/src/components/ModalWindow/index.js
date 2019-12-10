import { connect } from 'react-redux';
import { ModalWindow } from './ModalWindow';
import { loadModalData, toggleModalLink } from '../../store/actions';

function mapState2Props(state) {
  return {
    modalWindowUuid: state.modalWindowUuid,
    modalWindowData: state.modalWindowData,
  };
}

const mapDispatch2Props = dispatch => ({
  loadModalData: uuid => dispatch(loadModalData(uuid)),
  toggleModalLink: value => dispatch(toggleModalLink(value)),
});

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(ModalWindow);

export { Enhanced as ModalWindow };
