const { Router } = require('express');
const {
  postTicket,
  getTickets,
  getTicket,
  putTicket,
  deleteTicket,
} = require('../controllers/tickets.controller');
const ticketsRouter = Router();

ticketsRouter.post('/', postTicket);
ticketsRouter.get('/', getTickets);
ticketsRouter
  .route('/:ticketId')
  .get(getTicket)
  .put(putTicket)
  .delete(deleteTicket);

module.exports = ticketsRouter;
