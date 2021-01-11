export const TICKET_TYPE_SET = 'set';
export const TICKET_TYPE_MAP = 'map';
export const WORDS_TICKETS = ['билет', 'билета', 'билетов'];
export const WALLET_RUS = 'руб';
export const WAIT = 2500;
export const MAX_TICKETS_IN_BASKET = 6;

export const wordEnding = (number, words) =>
  // eslint-disable-next-line max-len
  words[number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]];
