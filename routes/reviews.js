const ReviewModel = require("../models/reviews");

const initRoutes = (app) => {
  app.get("/reviews", async (req, res) => {
    const reviews = await ReviewModel.getAll();

    res.status(200).json({ status: 200, message: "OK", reviews });
  });

  app.post("/reviews", async (req, res) => {
    const { id, ...restBody } = req.body;

    const review = new ReviewModel(restBody);
    review.save();

    res.status(200).json({ status: 200, message: "OK" });
  });

  app.delete("/reviews", async (req, res) => {
    const { id } = req.body;
    const review = await ReviewModel.findReview(id);

    if (!review) {
      res.status(404).json({ status: 404, message: "Not found" });
    } else {
      ReviewModel.delete(review);
      res.status(200).json({ status: 200, message: "OK", review });
    }
  });

  app.put("/reviews/:id", async (req, res) => {
    const review = await ReviewModel.findReview(req.params.id);
    const { id, ...restBody } = req.body;

    if (!review) {
      res.status(404).json({ status: 404, message: "Not found" });
    } else {
      ReviewModel.update(restBody);
      res.status(200).json({ status: 200, message: "OK", review });
    }
  });

  app.get("/reviews/:id", async (req, res) => {
    const review = await ReviewModel.findReview(req.params.id);

    if (!review) {
      res.status(404).json({ status: 404, message: "Not found" });
    } else {
      res.status(200).json({ status: 200, message: "OK", review });
    }
  });
};

module.exports = initRoutes;
