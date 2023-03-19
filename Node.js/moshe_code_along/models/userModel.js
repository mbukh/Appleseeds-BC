const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please add a user name"],
        },
        email: {
            type: String,
            required: [true, "Please add a user email address"],
            unique: [true, "Email address already taken"],
        },
        password: {
            type: String,
            required: [true, "Please add a user password"],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema, "users");
