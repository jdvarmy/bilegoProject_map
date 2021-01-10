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
  static get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            colors: [[600, null]],
            event: {
              address: 'Санкт-Петербург, Казанская ул., 7 (этаж 2)',
              date: '26 февраля 2021',
              title: 'Ольга Олейникова и Николай Добкин Piano Test',
            },
            map_data: '',
            map_images: [],
            ticket_type: 'set',
            tickets: [
              {
                color: null,
                description: 'Ольга Олейникова и Николай Добкин Piano, Партер (свободная рассадка)',
                end_date_time: '2021-02-26UTC18:00:00',
                id: 3816,
                name: 'Партер (свободная рассадка) one',
                price: '600',
                price_extra: 0,
                price_on_sale: null,
                price_regular: 600,
                row: null,
                row_name: null,
                seat: null,
                seat_name: null,
                sector: null,
                sector_name: null,
                start_date_time: '2020-09-15UTC00:00:00',
                stock: 56,
                stock_status: 'instock',
                type: 'without_map',
                uid: '-',
              },
              {
                color: null,
                description: 'Ольга Олейникова и Николай Добкин Piano, Партер (свободная рассадка)',
                end_date_time: '2021-02-26UTC18:00:00',
                id: 3817,
                name: 'Партер (свободная рассадка) two',
                price: '700',
                price_extra: 0,
                price_on_sale: null,
                price_regular: 700,
                row: null,
                row_name: null,
                seat: null,
                seat_name: null,
                sector: null,
                sector_name: null,
                start_date_time: '2020-09-15UTC00:00:00',
                stock: 3,
                stock_status: 'instock',
                type: 'without_map',
                uid: '-',
              },
              {
                color: null,
                description: 'Ольга Олейникова и Николай Добкин Piano, Партер (свободная рассадка)',
                end_date_time: '2021-02-26UTC18:00:00',
                id: 3818,
                name: 'Ольга Олейникова и Николай Добкин Piano, Партер (свободная рассадка)',
                price: '11000',
                price_extra: 0,
                price_on_sale: null,
                price_regular: 11000,
                row: null,
                row_name: null,
                seat: null,
                seat_name: null,
                sector: null,
                sector_name: null,
                start_date_time: '2020-09-15UTC00:00:00',
                stock: 6,
                stock_status: 'instock',
                type: 'without_map',
                uid: '-',
              },
            ],
            ticketcloud: true,
          },
        });
      }, 500);
    });

    // static get(url, params) {
    // if (params) {
    //   const qs = queryString.stringify(params);
    //   return instance.get(`${url}?${qs}`);
    // }
    // return instance.get(`${url}`);
  }

  static post(url, data) {
    return instance.post(`${url}`, data);
  }
}
