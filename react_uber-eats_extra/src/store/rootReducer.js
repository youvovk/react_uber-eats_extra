import { ACTION_TYPES } from './actions';

const initialStore = {
  restaurantsListData: null,
  isLoading: false,
  error: null,
  restaurantData: null,
  openedModalWindow: false,
  modalWindowUuid: '',
  modalWindowData: null,
  modalLink: false,
  locations: null,
};

export function rootReducer(state = initialStore, action) {
  switch (action.type) {
    case ACTION_TYPES.SAVE_LOCATIONS: {
      const { payload } = action;

      return {
        ...state,
        locations: payload,
      };
    }

    case ACTION_TYPES.TOGGLE_MODAL_LINK: {
      const { payload } = action;

      return {
        ...state,
        modalLink: payload,
      };
    }

    case ACTION_TYPES.SAVE_MODAL_DATA: {
      const { payload } = action;

      return {
        ...state,
        modalWindowData: payload,
      };
    }

    case ACTION_TYPES.OPEN_MODAL_WINDOW: {
      const { payload, rule } = action;
      const deletedModalData = rule ? state.modalWindowData : null;

      return {
        ...state,
        openedModalWindow: rule,
        modalWindowUuid: payload,
        modalWindowData: deletedModalData,
      };
    }

    case ACTION_TYPES.SAVE_RESTAURANTS: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        restaurantsListData: payload,
      };
    }

    case ACTION_TYPES.SAVE_RESTAURANT: {
      const { payload } = action;

      return {
        ...state,
        error: null,
        restaurantData: payload,
      };
    }

    case ACTION_TYPES.SET_LOAD_RESTAURANTS_ERROR: {
      const { payload } = action;

      return {
        ...state,
        error: payload,
        restaurantsListData: null,
      };
    }

    case ACTION_TYPES.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ACTION_TYPES.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}
