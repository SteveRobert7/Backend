const homeService = require("../services/homeservice");

module.exports = (req, res) => {
  let result = homeService.Get();
  res.send(result);
};
