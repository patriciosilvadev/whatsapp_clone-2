import { actionTypes } from 'src/config/constants';
import axios from 'axios';
import { push } from 'connected-react-router';

const loginSuccess = (payload) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload,
});

const loginFailure = (payload) => ({
  type: actionTypes.LOGIN_FAILURE,
  payload,
});

const loginRequest = () => ({
  type: actionTypes.LOGIN_REQUEST,
});

const loginAuth = (payload) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const res = await axios.post(`https://test.tech.onesound.id/login`, payload, {
      headers: { 'x-api-key': 'onesound.id' },
    });

    const { status, data: { data } } = res;
    if (status === 200) {
      localStorage.setItem('token', 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDI2MTA1MjIsImlzcyI6Ik9uZXNvdW5kIFRlY2ggVGVzdCIsImlkIjoxLCJuYW1lIjoiUGFuZHUgZHdpIFB1dHJhIE51Z3JvaG8iLCJwaG90byI6IiJ9.Ow2wNzp4hnsM8tLMnxzL2ZFIT7k8uvagi9D8Zen1sQo_Fdbe7WmM1tJhbaDdi9T8rwR9cKTT-ASwd4Np0Jiw5w');
      dispatch(loginSuccess(data));
      dispatch(push('/'));
    }
  } catch (error) {
    dispatch(loginFailure("Oops! Sepertinya ada yang salah. Coba masukkan kembali email dan kata sandi Anda."));
  }
};

export default loginAuth;
