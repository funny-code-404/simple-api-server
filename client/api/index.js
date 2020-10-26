const BASE_URL = "https://quiet-spire-94328.herokuapp.com/reviews";

const Client = (() =>
  class {
    constructor() {
      this.reviewsClient = new RestClient(BASE_URL);

      this.reviews = new Reviews(this.reviewsClient);
    }
  })();
