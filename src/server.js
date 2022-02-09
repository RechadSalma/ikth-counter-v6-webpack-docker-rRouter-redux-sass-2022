const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

/*reads our statc files such as css / js / etc… */
app.use("/", express.static(path.resolve(__dirname, "../dist")));

/*Get node server to read from our bundle index.html file */
app.get("*", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  fs.readFile(pathToHtmlFile, "utf-8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

const iKport = process.env.PORT || 4000;
app.listen(iKport, () =>
  console.log("iK server connection successfuly " + iKport)
);
/*create a http://localhost:3000 port*/
// app.listen(3000, () => {
//   console.log("iK Application is running on http://localhost:3000/");
// });
