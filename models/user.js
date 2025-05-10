import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default: '/images/profile.jpg',
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user',
      enum: ['user', 'admin'],
    },
    password: {
      type: String,
      required: true,
    },
    passwordResetCode: {
      type: String,
    },
    verificationCode: {
      type: Number,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.index({ name: 'text' });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
