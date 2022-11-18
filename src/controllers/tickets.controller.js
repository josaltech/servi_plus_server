const Ticket = require('../models/Ticket.model');

const postTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create({ userId: req.user.id, ...req.body });
    res.status(201).json({
      success: true,
      data: { ticket },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ userId: req.user.id });

    res.status(200).json({
      success: true,
      data: { tickets: tickets.map((ticket) => ticket.toJSON()) },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const ticket = await Ticket.findById(ticketId);
    res.status(200).json({
      success: true,
      data: ticket,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const putTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const ticket = await Ticket.findByIdAndUpdate(ticketId, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      data: { ticket },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const ticket = await Ticket.findByIdAndDelete(ticketId);
    res.status(200).json({
      success: true,
      data: { ticket },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  postTicket,
  getTickets,
  getTicket,
  putTicket,
  deleteTicket,
};
