import * as queryString from 'query-string';
import axios from 'axios';

const requestRoute = 'https://__city__.bilego.ru/wp-json/bilego/v1';
const { c } = queryString.parse(window.location.search);

const config = {
  withCredentials: true,
  baseURL: process.env.REACT_APP_HOST || `${requestRoute.replace(/__city__/i, c)}`,
};

const instance = axios.create(config);

export default class Api {
  static get(url, params) {
    if (params) {
      const qs = queryString.stringify(params);
      return instance.get(`${url}?${qs}`);
    }
    return instance.get(`${url}`);
  }

  static post(url, data) {
    return instance.post(`${url}`, data);
  }
}
