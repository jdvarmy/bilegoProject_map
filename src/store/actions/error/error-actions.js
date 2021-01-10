import { createAction } from 'typesafe-actions';

const scope = '@ERROR';

export const showError = createAction(`${scope}/SHOW`)();
export const hideError = createAction(`${scope}/HIDE`)();
