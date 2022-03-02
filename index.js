const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./src/Documentation/Swagger");
const authRoute = require("./src/Routes/auth");
const vendorRoute = require("./src/Routes/vendor");
const vehicleRoute = require("./src/Routes/vehicle");
const jobRoute = require("./src/Routes/job");
const accountRoute = require("./src/Routes/acocunt");

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((response) => {
    console.log("database Connected");
  })
  .catch((err) => console.log(err));
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//HEADERS MIDDLE WARE
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

//Global Cache
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    success: {
      message: "WELCOME TO THE Auto Club API'S",
    },
    error: error.message,
  });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/user", authRoute);
app.use("/api/vendor", vendorRoute);
app.use("/api/vehicle", vehicleRoute);
app.use("/api/job", jobRoute);
app.use("/api/account", accountRoute);
//Routes
/**
 * @swagger
 * /user:
 *  get:
 *      description: Use to request for all Users
 *      response:
 *          '200':
 *              description:A successfull response
 */
// app.get('/user',(req,res)=>{
//     res.status(200).send('User found Successfully')
// })

module.exports = app;
