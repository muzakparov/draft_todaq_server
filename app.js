var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var aliceallRouter = require("./routes/aliceall");
var alicerespRouter = require("./routes/aliceresp");
var createdrRouter = require("./routes/createdr");
var createfiledrRouter = require("./routes/createfiledr");
var crrespRouter = require("./routes/crresp");
var doctortxnRouter = require("./routes/doctortxn");
var doctortxnrespRouter = require("./routes/doctortxnresp");
var doctortxnresp2Router = require("./routes/doctortxnresp2");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/aliceall", aliceallRouter);
app.use("/aliceresp", alicerespRouter);
app.use("/createdr", createdrRouter);
app.use("/createfiledr", createfiledrRouter);
app.use("/crresp", crrespRouter);
app.use("/doctortxn", doctortxnRouter);
app.use("/doctortxnresp", doctortxnrespRouter);
app.use("/doctortxnresp2", doctortxnresp2Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
