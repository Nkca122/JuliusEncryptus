const cors = require("cors");
const env = require("dotenv");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const decrypt = require("./utils/utils");
const ExpressError = require("./utils/error");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser());
app.use(express.json());
app.use(cors());
env.config();

const gibb = require("asdfjkl");
app.post("/", (req, res, next) => {
  if (
    Object.keys(req.body).length == 0 ||
    Object.keys(req.body).findIndex((key) => key == "cipher") == -1
  )
    return next(
      new ExpressError(
        process.env.ERR_CIPHER_NA_MISLABELLED,
        "ERR_CIPHER_NA_MISLABELLED",
        500
      )
    );
  else {
    if (typeof(req.body.cipher) != "string")
      return next(
        new ExpressError(process.env.ERR_BAD_REQUEST, "ERR_BAD_REQUEST", 500)
      );
    else {
      return res.send({
        body: decrypt(req.body.cipher.toLowerCase(), gibb),
      });
    }
  }
});

// app.get("*", (req, res, next) => {
//   return next(
//     new ExpressError(process.env.ERR_BAD_METHOD, "ERR_BAD_METHOD", 400)
//   );
// });

// app.post("*", (req, res, next) => {
//   return next(
//     new ExpressError(process.env.ERR_BAD_METHOD, "ERR_BAD_METHOD", 400)
//   );
// });

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err);
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server Started at ${process.env.PORT || 4000}`);
});
