import { createAsyncAction } from 'typesafe-actions';

const scope = '@EVENT';
// const scopeSet = '@SET';

// eslint-disable-next-line import/prefer-default-export
export const feetchEventAsync = createAsyncAction(
  `${scope}/FETCH_EVENT_REQUEST`,
  `${scope}/FETCH_EVENT_SUCCESS`,
  `${scope}/FETCH_EVENT_FAILURE`,
)();
