const API = createInstance();

const getReviews = () =>
  API.get(``)
    .then((data) => data)
    .catch((error) => {
      throw error;
    });

const createReview = (url = ' ', review) =>
  API.post(url, review).catch((error) => {
    throw error;
  });

const updateReview = (url = ' ', review) =>
  API.put(url, review).catch((error) => {
    throw error;
  });

const deleteReview = (url = ' ', data) => {
  API.delete(url, { data }).catch((error) => {
    throw error;
  });
};
