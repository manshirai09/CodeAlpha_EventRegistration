const { param } = require("express-validator");

const registrationValidation = [
  param("eventId")
    .isMongoId()
    .withMessage("Invalid Event ID"),
];

module.exports = {
  registrationValidation,
};
