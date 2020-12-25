import { createAction } from 'typesafe-actions';

const scope = '@BASKET';

export const addTicketToBasket = createAction(`${scope}/ADD`)();
export const removeTicketFromBasket = createAction(`${scope}/REMOVE`)();
