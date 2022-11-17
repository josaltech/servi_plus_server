const { Router } = require('express');
const {
  postTicket,
  getTickets,
  getTicket,
  patchTicket,
  deleteTicket,
} = require('../controllers/tickets.controller');
const ticketsRouter = Router();

ticketsRouter.post('/', postTicket);
ticketsRouter.get('/', getTickets);
ticketsRouter
  .route('/:ticketId')
  .get(getTicket)
  .patch(patchTicket)
  .delete(deleteTicket);

module.exports = ticketsRouter;
