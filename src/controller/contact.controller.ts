import { Contact } from '@prisma/client'
import { Request, Response } from 'express'

import { createContactService } from '../service/create-contact.service'
import { Controller } from './controller'

export class ContactController implements Controller {
  async list(req: Request, res: Response): Promise<Response> {
    const contacts: Contact[] = []
    return res.status(200).json(contacts)
  }

  async show(req: Request, res: Response): Promise<Response> {
    return res.status(200).json()
  }

  async create(req: Request, res: Response): Promise<Response> {
    const contact = req.body as Contact
    const userId = 1
    createContactService(contact, userId)
    return res.status(200).json(contact)
  }

  async update(req: Request, res: Response): Promise<Response> {
    return res.status(200).json()
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    return res.status(200).json()
  }
}
