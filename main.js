const express = require("express");

const { initRoutes } = require("./routes");
const cors = require("cors");

const PORT = process.env.PORT || 7000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

initRoutes(app);

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
