import { connect } from 'react-redux';
import { Header } from './Header';
import { selectorLocations } from '../../store/selectors';

function mapState2Props(state) {
  return {
    locations: selectorLocations(state),
  };
}

const Enhanced = connect(
  mapState2Props,
)(Header);

export { Enhanced as Header };
