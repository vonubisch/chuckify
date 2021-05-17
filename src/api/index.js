import axios from 'axios';

const BASE_URL = 'https://api.chucknorris.io/jokes/';

const api = () => {
  const source = axios.CancelToken.source();
  const cancelToken = source.token;
  const instance = axios.create();
  const get = (path) => instance.get(`${BASE_URL}${path}`, { cancelToken });
  return { get, source, isCancel: axios.isCancel };
}

export default api;