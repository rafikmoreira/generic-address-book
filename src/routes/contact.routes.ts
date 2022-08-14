import { Router } from 'express';
import { ContactController } from '../controller/contact.controller';
import { ensureAuthenticated } from '../middleware/ensure-authenticated';

const contactController = new ContactController();
const contactRouter = Router();

contactRouter.get('/contact', ensureAuthenticated, contactController.list);
contactRouter.get('/contact/:id', ensureAuthenticated, contactController.show);
contactRouter.post('/contact', ensureAuthenticated, contactController.create);
contactRouter.put(
  '/contact/:id',
  ensureAuthenticated,
  contactController.update
);
contactRouter.delete(
  '/contact/:id',
  ensureAuthenticated,
  contactController.destroy
);

export default contactRouter;
