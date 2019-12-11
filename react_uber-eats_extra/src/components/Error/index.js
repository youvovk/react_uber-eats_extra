import { connect } from 'react-redux';
import { Error } from './Error';
import {
  openModalWindow,
} from '../../store/actions';

const mapDispatch2Props = dispatch => ({
  openModalWindow: (uuid, rule) => dispatch(openModalWindow(uuid, rule)),
});

function mapState2Props(state) {
  return {
    openedModalWindow: state.openedModalWindow,
  };
}

const Enhanced = connect(
  mapState2Props,
  mapDispatch2Props,
)(Error);

export { Enhanced as Error };
