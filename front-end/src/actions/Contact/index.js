import { actionTypes } from 'src/config/constants';
import axios from 'axios';
import { authHeader } from 'src/utils/helper';

const getContactSuccess = (payload) => ({
  type: actionTypes.GET_CONTACT_SUCCESS,
  payload,
});

const getContactFailure = (payload) => ({
  type: actionTypes.GET_CONTACT_FAILURE,
  payload,
});

const getContactRequest = () => ({
  type: actionTypes.GET_CONTACT_REQUEST,
});

const getContact = () => async (dispatch) => {
  dispatch(getContactRequest());
  try {
    const res = await axios.get(`https://test.tech.onesound.id`, {
      headers: authHeader(),
    });

    console.log(res);
    const { status, data: { data } } = res;

    if (status === 200) {
      dispatch(getContactSuccess(data));
    }

  } catch (error) {
    dispatch(getContactFailure("Oops! Sepertinya ada yang salah. Coba masukkan kembali email dan kata sandi Anda."));
  }
};

export default getContact;
