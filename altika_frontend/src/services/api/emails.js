import axios from 'axios';
import OutsideSnackbar from '../elements/OutsideSnackbar';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

async function send(params) {
  try {
    let response = await axios.post('/send/', params);
    return response;
  } catch (error) {
    OutsideSnackbar.error(`Что-то пошло не так ${error}`)
  }
}

const exportData = {
  send
};

export default exportData;