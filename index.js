const express = require("express");
const app = express();
const port = 3000;

const delay = 1000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  const start = process.hrtime();
  console.log(`\nIncoming "${req.url}"`);

  setTimeout(() => {
    res.send({ result: `Hello World!` });

    const end = process.hrtime(start);
    console.log(
      `Responding.. (${(end[0] * 1000 + end[1] / 1000000).toFixed(2)}ms)`
    );
  }, delay);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
