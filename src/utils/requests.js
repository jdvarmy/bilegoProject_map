import * as queryString from 'query-string';
import Api from './api';
import textString from './strings';

// eslint-disable-next-line import/prefer-default-export
export const getEventData = async () => {
  const { search } = window.location;
  if (!search) {
    throw new Error(textString.error.noSearchQuery);
  }
  const { e } = queryString.parse(search);
  return Api.get(`/tickets/${e}`);
};
