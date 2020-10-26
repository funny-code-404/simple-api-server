const Reviews = (() =>
  class {
    constructor(client) {
      this.client = client;
    }

    getReviewsData = () => this.client.get();

    getReviewInfo = (path, data) => this.client.get(path, data);

    createReview = (path, data) => this.client.post(path, data);

    updateReview = (path, data) => this.client.put(path, data);

    deleteReview = (path, data) => this.client.delete(path, data);
  })();
