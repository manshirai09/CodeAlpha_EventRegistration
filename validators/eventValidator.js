const { body } = require("express-validator");

const eventValidation = [
  body("title")
    .notEmpty()
    .withMessage("Title is required"),

  body("description")
    .notEmpty()
    .withMessage("Description is required"),

  body("date")
    .notEmpty()
    .withMessage("Date is required"),

  body("time")
    .notEmpty()
    .withMessage("Time is required"),

  body("location")
    .notEmpty()
    .withMessage("Location is required"),

  body("capacity")
    .isInt({ min: 1 })
    .withMessage("Capacity must be greater than 0"),
];

module.exports = {
  eventValidation,
};