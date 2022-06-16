import { remove } from '../../services/localStorage/localStorage';

function logout(state) {
  remove('token');
  state.isLoggedIn = false;
}

export default logout;
