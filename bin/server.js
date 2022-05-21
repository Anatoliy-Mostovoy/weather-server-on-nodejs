require("dotenv").config();
const app = require("../app.js");

const PORT = process.env.PORT || 9091;

app.listen(PORT, (error, req, res) => {
  if (error) {
    console.log("Sorry, some error");
  }
  console.log(`Server was started on port ${PORT}`);
});
