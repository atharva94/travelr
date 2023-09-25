const request = require("request");
const apiOptions = {
  server: "http://localhost:3000",
};

// var fs = require("fs");
// var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

/* GET travel view */
const travel = (req, res) => {
  res.render("travel", { title: "Travlr Getaways" });
};

/* internal method tp render the travel list */
const renderTravelList = (req, res, responseBody) => {
  let message = null;
  let pageTitle = process.env.npm_package_description + " - Travel";
  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No trips exist in our database!";
    }
  }
  res.render("travel", {
    title: pageTitle,
    trips: responseBody,
    message,
  });
};

const travelList = (req, res) => {
  const path = "/api/trips";
  const requsetOptions = {
    url: `${apiOptions.server}${path}`,
    method: "GET",
    json: {},
  };
  console.info(">> travelController.travelList calling " + requsetOptions.url);
  request(requsetOptions, (err, { statusCode }, body) => {
    if (err) {
      console.error(err);
    }
    renderTravelList(req, res, body);
  });
};
module.exports = {
  travel,
  travelList,
};
