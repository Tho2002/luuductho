const express = require("express");

require("dotenv").config();
const app = express();
const port = process.env.PORT;
const router = require("./routes/client/client.route");
const routerAdmin = require("./routes/admin/admin.route");
const database = require("./config/database");
const systemConfig = require("./config/system");

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
database.connect();

app.locals.prefixAdmin = systemConfig.prefixAdmin;
router(app);
routerAdmin(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
