const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/route");
const { testDate } = require("./middemwares/date");
const port =4000;

app.set("views", "./views");

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", testDate, router);

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`Server is listening on port ${port}`);
});
