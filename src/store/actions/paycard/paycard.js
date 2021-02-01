import { createAction } from 'typesafe-actions';

const scope = '@PAYCARD';

export const showCard = createAction(`${scope}/SHOW`)();
export const hideCard = createAction(`${scope}/HIDE`)();
