const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { User } = require("./models/User");
const mongoose = require("mongoose");
const config = require("./config/key");
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//application/json
app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("HelloWorld1");
});

app.post("/register", (req, res) => {
  // 회원 가입 할때 필요한 정보들을 client에서 가져오면 데이터베이스에 저장.
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(5000);
