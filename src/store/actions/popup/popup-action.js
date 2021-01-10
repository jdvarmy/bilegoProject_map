import { createAction } from 'typesafe-actions';

const scope = '@POP';

export const showPop = createAction(`${scope}/SHOW`)();
export const hidePop = createAction(`${scope}/HIDE`)();
