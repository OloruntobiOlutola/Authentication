const { default: mongoose } = require("mongoose");

const userSchema = new mongoose({
  name: {
    type: String,
    required: [true, "A username is required for all users"],
    maxLength: [20, "A username must not be more than 20 characters"],
    minLength: [3, "A username must be at least 3 characters"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email field is required for all users"],
    validate: [validator.isEmail, "Please enter a valid email"],
    trim: true,
    lowerCase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "A password is required for all users"],
    minLength: [8, "A password must be at least 8 characters"],
    trim: true,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "A user is required to confirm their password"],
    validate: {
      validator: function (val) {
        return val === this.password;
      },
      message: "Password does not match",
    },
    trim: true,
    select: false,
  },
  passwordChangedAt: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
