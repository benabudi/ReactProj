require("./DB/connectToDb");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const chalk = require("chalk");
const morgan = require("morgan");
const cors = require("cors");
// require("./initialData/initialData")();

app.use(morgan(chalk.cyan(":method :url :status :response-time ms")));

//! routes:
const adminMiddlewareRouter = require("./middleare/authAdminMiddlewware");
const adminSystemRouter = require("./routes/adminSystem");
const userSystemRouter = require("./routes/userSystem");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//! route usage:
app.use("/user", userSystemRouter);
app.use("/admin", adminMiddlewareRouter, adminSystemRouter);

const PORT = 8181;
app.listen(PORT, () =>
  console.log(chalk.blueBright.bold(`server run on: http://:localhost:${PORT}`))
);
