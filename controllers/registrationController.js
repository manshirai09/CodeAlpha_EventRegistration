const Registration = require("../models/Registration");
const Event = require("../models/Event");

// @desc    Register For Event
// @route   POST /api/registrations/:eventId
// @access  Private

const registerForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    // Check seats
    if (event.availableSeats <= 0) {
      return res.status(400).json({
        success: false,
        message: "No seats available",
      });
    }

    // Already Registered?
    const alreadyRegistered = await Registration.findOne({
      user: req.user._id,
      event: event._id,
      status: "Registered",
    });

    if (alreadyRegistered) {
      return res.status(400).json({
        success: false,
        message: "You are already registered for this event",
      });
    }

    // Create Registration
    const registration = await Registration.create({
      user: req.user._id,
      event: event._id,
    });

    // Reduce Seat
    event.availableSeats -= 1;
    await event.save();

    res.status(201).json({
      success: true,
      message: "Registration Successful",
      registration,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get My Registrations
// @route   GET /api/registrations/my
// @access  Private

const getMyRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({
      user: req.user._id,
    })
      .populate("event")
      .populate("user", "name email");

    res.status(200).json({
      success: true,
      count: registrations.length,
      registrations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Cancel Registration
// @route   DELETE /api/registrations/:eventId
// @access  Private

const cancelRegistration = async (req, res) => {
  try {
    const registration = await Registration.findOne({
      user: req.user._id,
      event: req.params.eventId,
      status: "Registered",
    });

    if (!registration) {
      return res.status(404).json({
        success: false,
        message: "Registration not found",
      });
    }

    registration.status = "Cancelled";
    await registration.save();

    // Increase Seat
    const event = await Event.findById(req.params.eventId);

    if (event) {
      event.availableSeats += 1;
      await event.save();
    }

    res.status(200).json({
      success: true,
      message: "Registration Cancelled Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerForEvent,
  getMyRegistrations,
  cancelRegistration,
};