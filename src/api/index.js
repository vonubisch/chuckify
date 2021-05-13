import axios from 'axios';

const BASE_URL = 'https://api.chucknorris.io/jokes/';

const get = (path) => axios.get(`${BASE_URL}${path}`);

const random = () => get(`random`);

const randomCategory = (category) => get(`random?category=${category}`);

const categories = () => get(`categories`);

const search = (query) => get(`search?query=${query}`)

export default {
  random,
  randomCategory,
  categories,
  search,
};