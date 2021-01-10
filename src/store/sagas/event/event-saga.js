import { all, put, call, takeLatest } from 'redux-saga/effects';
import { feetchEventAsync } from '../../actions/event/event-actions';
import { showError } from '../../actions/error/error-actions';
import { getEventData } from '../../../utils/requests';
import textString from '../../../utils/strings';

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
    // todo: переделать на нормальный обработчик. с сервера не приходит ошибка...
    if (!event.title) {
      throw new Error(textString.error.noSearchQuery);
    }
    yield put(feetchEventAsync.success(data));
  } catch (e) {
    yield put(showError(e));
  }
}

export default function* eventSaga() {
  yield all([takeLatest(feetchEventAsync.request, eventRequest)]);
}
