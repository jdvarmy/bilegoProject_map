import { all, put, call, takeLatest } from 'redux-saga/effects';
import { feetchEventAsync } from '../../actions/event/event-actions';
import { showError } from '../../actions/error/error-actions';
import { getEventData } from '../../../utils/requests';

function* eventRequest() {
  try {
    const {
      // eslint-disable-next-line camelcase
      data: { colors, event, map_data, map_images, ticket_type, tickets, ticketcloud },
    } = yield call(getEventData);
    const data = {
      event,
      map: {
        data: map_data,
        image: map_images,
      },
      tickets: {
        type: ticket_type,
        tickets,
      },
      props: {
        ticketcloud,
        colors,
      },
    };
    yield put(feetchEventAsync.success(data));
  } catch (e) {
    yield put(showError(e));
  }
}

export default function* eventSaga() {
  yield all([takeLatest(feetchEventAsync.request, eventRequest)]);
}
