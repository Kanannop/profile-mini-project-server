const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const educationSchema = new Schema({
  year: { type: String, required: true },
  university: { type: String, required: true },
});

const experienceSchema = new Schema({
  year: { type: String, required: true },
  company: { type: String, required: true },
  position: { type: String, required: true },
});

const skillSchema = new Schema({
  skill: { type: String, required: true },
  rate: { type: Number, min: 1, max: 10, required: true },
});

const interestSchema = new Schema({
  interest: { type: String, required: true },
});

const guildSchema = new Schema({
  guild: { type: String, required: true },
});

const contactSchema = new Schema({
  address: { type: String, required: true },
  subdistrict: { type: String, required: true },
  district: { type: String, required: true },
  province: { type: String, required: true },
  postal: { type: String, required: true },
  facebook: { type: String, required: true },
  lineId: { type: String, required: true },
  instagram: { type: String, required: true },
});

const UserInfoSchema = new Schema(
  {
    information: {
      userImage: { type: String, required: false},
      userCoverBanner: { type: String, required: false},
      username: { type: String, required: true },
      nickname: { type: String, required: true },
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
      positionOption: { type: String, required: true },
      nationality: { type: String, required: true },
      telephoneNumber: { type: String, required: true },
      startingDate: { type: Date, required: true },
    },
    contact: contactSchema,
    education: [educationSchema],
    experience: [experienceSchema],
    skill: [skillSchema],
    interest: [interestSchema],
    guild: [guildSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserInfo", UserInfoSchema);
