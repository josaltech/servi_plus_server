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

module.exports = model('Ticket', TicketSchema);
