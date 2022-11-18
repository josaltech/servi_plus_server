const { Schema, model } = require('mongoose');

const TicketSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ['open', 'pending', 'success'],
      default: 'open',
    },
  },
  {
    timestamps: true,
  }
);

TicketSchema.set('toJSON', {
  virtuals: true,
  getters: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.createdAt = _doc.createdAt.toLocaleString();
    ret.updatedAt = _doc.updatedAt.toLocaleString();
    delete ret._id;
  },
});

module.exports = model('Ticket', TicketSchema);
