const defaultConfig = {
  baseURL: 'https://quiet-spire-94328.herokuapp.com/reviews',
  headers: {
    'Content-Type': 'application/json',
  },
};

const createInstance = (customConfig = {}) => {
  const config = {
    ...defaultConfig,
    ...customConfig,
  };

  const instance = axios.create(config);

  return instance;
};
