const mongoose = require("mongoose");

const Service = mongoose.Schema(
  {
    serviceId: mongoose.Types.ObjectId,
    name: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    workType: { type: String, required: true, default: "mechanical" }, //mechanical,bodywork
    warrantyPeriod: { type: String, required: true },
    price: { type: String, required: true }, //mechanical,bodywork
    date: { type: Date, default: Date.now() },
    workDuration: { type: String, required: true },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("Service", Service);
