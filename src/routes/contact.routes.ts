import { Router } from 'express'
import { ContactController } from '../controller/contact.controller'

const contactController = new ContactController()
const contactRouter = Router()

contactRouter.get('/contact', contactController.list)
contactRouter.get('/contact/:id', contactController.show)
contactRouter.post('/contact', contactController.create)
contactRouter.put('/contact/:id', contactController.update)
contactRouter.delete('/contact/:id', contactController.destroy)

export default contactRouter
