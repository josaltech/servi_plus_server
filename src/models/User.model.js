const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.set('toJSON', {
  virtuals: true,
  getters: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.createdAt = _doc.createdAt.toLocaleString();
    ret.updatedAt = _doc.updatedAt.toLocaleString();
    delete ret._id;
  },
});

module.exports = model('User', UserSchema);
