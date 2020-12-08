import * as queryString from 'querystring';
import axios from 'axios';

const config = {
  withCredentials: true,
  baseURL: process.env.REACT_APP_HOST,
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
