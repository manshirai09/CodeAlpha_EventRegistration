const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  registerForEvent,
  getMyRegistrations,
  cancelRegistration,
} = require("../controllers/registrationController");

// Register for Event
router.post("/:eventId", protect, registerForEvent);

// View My Registrations
router.get("/my", protect, getMyRegistrations);

// Cancel Registration
router.delete("/:eventId", protect, cancelRegistration);

module.exports = router;