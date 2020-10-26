const { v4: uuidv4 } = require("uuid");
const path = require("path");
const fs = require("fs");

class Review {
  constructor({ name = "", email = "", review = "" }) {
    this.name = name;
    this.email = email;
    this.review = review;
    this.id = uuidv4();
  }

  getInstance() {
    return {
      name: this.name,
      email: this.email,
      review: this.review,
      id: this.id,
    };
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "..", "data", "reviews.json"),
        "utf-8",
        (err, content) => (err ? reject(error) : resolve(JSON.parse(content)))
      );
    });
  }

  static saveHelper(reviews) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, "..", "data", "reviews.json"),
        JSON.stringify(reviews),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    });
  }

  async save() {
    const reviews = await Review.getAll();
    reviews.push(this.getInstance());

    return Review.saveHelper(reviews);
  }

  static async update(review) {
    const reviews = await Review.getAll();
    const index = reviews.findIndex(({ id }) => review.id === id);

    reviews[index] = review;

    return Review.saveHelper(reviews);
  }

  static async delete(review) {
    const reviews = await Review.getAll();
    const index = reviews.findIndex(({ id }) => review.id === id);

    const data = [...reviews.slice(0, index), ...reviews.slice(index + 1)];

    return Review.saveHelper(data);
  }

  static async findReview(id) {
    const reviews = await Review.getAll();

    return reviews.find((review) => review.id === id);
  }
}

module.exports = Review;
