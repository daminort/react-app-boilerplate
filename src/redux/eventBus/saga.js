import { eventChannel } from 'redux-saga';
import { take, put, call } from 'redux-saga/effects';

import { eventEmitter } from '../../lib/event-bus';
import { CUSTOM_EVENTS } from '../../constants/customEvents';

import { authActions } from '../auth/actions';

function createChannel() {

  return eventChannel(emit => {

    const unauthorizedHandler = () => {
      emit(authActions.logout());
    };

    eventEmitter.on(CUSTOM_EVENTS.unauthorized, unauthorizedHandler);

    return () => {
      eventEmitter.off(CUSTOM_EVENTS.unauthorized, unauthorizedHandler);
    };
  });
}

export default function* eventBusSaga() {
  const channel = yield call(createChannel);
  try {
    while (true) {
      const action = yield take(channel);
      yield put(action);
    }

  } finally {
    console.log('Event Bus Channel terminated');
  }
}
