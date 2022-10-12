const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please enter your first name"],
        maxLength: [10, "Length cannot exceed more than 10 characters"],
        minLength: [3, "Length should have minimum 3 characters"]
    },
    lastname: {
        type: String,
        required: [true, "Please enter your last name"],
        maxLength: [10, "Length cannot exceed more than 10 characters"],
        minLength: [3, "Length should have minimum 3 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        maxLength: [12, "Password length cannot exceed more than 12 characters"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    avtar: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    role: {
        type: String,
        default: "user",
    },


    resetPasswordToken: String,
    resetPasswordExpire: Date,

})

//change password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    this.password = await bcrypt.hash(this.password, 10)
})

//JWT TOKEN
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

//COMPARE PASSWORD
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword , this.password);
}

module.exports = mongoose.model("User", userSchema);