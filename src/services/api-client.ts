import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '54fb8a42e6ba4f1a8749f6caa855e50a',
  },
});
