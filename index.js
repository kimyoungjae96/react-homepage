const express = require("express");
const app = express();
const mongoose = require("mongoose");

//useNewUrlParser => mongoose에서 오는 deprecation 경고를 없애기 위해 사용
//useUnified
mongoose
  .connect(
    "mongodb+srv://YoungJae:react-blog@react-blog-vw73j.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  )
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("HelloWorld");
});

app.listen(5000);
