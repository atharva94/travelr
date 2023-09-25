const mongoose = require("mongoose");
const host = process.env.DB_HOST || "127.0.0.1";
const dbURI = `mongodb://${host}/travelr`;

// Fix typo: useUnifiedTopology
// mongoose.set("useUnifiedTopology", true);

const connect = () => {
  setTimeout(() => {
    mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
    });
  }, 1000);
};

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to database");
});

mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restart", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});

process.once("SIGINT", () => {
  gracefulShutdown("app termination", () => {
    process.exit(0);
  });
});

process.once("SIGTERM", () => {
  gracefulShutdown("Heroku app shutdown", () => {
    process.exit(0);
  });
});

connect();

// If "./travelr" is intended to define a Mongoose model or perform other operations, include it here.
// require("./travelr");
