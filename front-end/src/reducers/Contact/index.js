import { actionTypes } from 'src/config/constants';

const initialState = {
  contactList: [],
  isContactLoading: false,
  message: '',
};

const getContact = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_CONTACT_SUCCESS:
      return {
        ...state,
        isContactLoading: false,
        contactList: payload,
      };

    case actionTypes.GET_CONTACT_FAILURE:
      return {
        ...state,
        message: payload,
        isContactLoading: false,
      };

    case actionTypes.GET_CONTACT_REQUEST:
      return {
        ...state,
        isContactLoading: true,
      };

    default:
      return state;
  }
};

export default getContact;
