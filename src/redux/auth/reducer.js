import Immutable from 'seamless-immutable';
import actions from './actions';

const initState = Immutable.from({
  user: null,
});

export default function authReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.PROFILE_REFRESH: {
      return Immutable.set(state, 'user', payload.user);
    }
    default: {
      return state;
    }
  }
}
