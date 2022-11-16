const express = require("express");
const app = express();
app.get("/", (request, response) => {
  const addDays = require("date-fns/addDays");
  let dateTime = addDays(new Date(), 100);
  response.send(dateTime);
});

app.listen(3000);
module.exports = app;
