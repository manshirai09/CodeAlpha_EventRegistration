const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },

    date: {
      type: Date,
      required: [true, "Event date is required"],
    },

    time: {
      type: String,
      required: [true, "Event time is required"],
    },

    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },

    capacity: {
      type: Number,
      required: [true, "Capacity is required"],
      min: 1,
    },

    availableSeats: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      enum: ["Workshop", "Seminar", "Hackathon", "Conference", "Other"],
      default: "Other",
    },

    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);