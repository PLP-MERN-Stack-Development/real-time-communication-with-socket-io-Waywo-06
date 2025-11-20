const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema(
  {
    clerkUserId: { type: String, required: true, unique: true }, 
    displayName: { type: String, required: true },               
    avatarUrl: { type: String, default: "" },                    
    email: { type: String, default: "" },
    lastSeenAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

const UserProfile = mongoose.model("UserProfile", userProfileSchema);
module.exports = UserProfile;