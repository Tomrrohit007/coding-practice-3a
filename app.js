const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  let dateTime = addDays(new Date(), 100);
  response.send(
    `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
