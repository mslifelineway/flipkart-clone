const express = require("express");
const server = express();
require("dotenv").config();
require("./mongoose");
const port = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan');
const authRouter = require('./routers/auth.router');
const adminRouter = require('./routers/admin/auth.router');

server.use(morgan('dev'));
server.use(cors());
server.use(bodyParser.json());

server.use('/api', authRouter);
server.use('/api/admin', adminRouter);

server.all("**", (req, res) => {
  res.status(400).json({
    status: false,
    message: "Invalid Location",
  });
});

server.listen(port, ()=> {
  console.log("Server is listening on * " + port);
});
