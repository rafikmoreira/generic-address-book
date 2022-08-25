import { Contact, User } from '@prisma/client';
import { Request, Response } from 'express';

import { CreateContactService } from '../service/contact/create-contact.service';
import { Controller } from '../interfaces/controller';
import { ListContactService } from '../service/contact/list-contact.service';
import { ShowContactService } from '../service/contact/show-contact.service';
import { DestroyContactService } from '../service/contact/destroy-contact.service';
import { UpdatedContactService } from '../service/contact/update-contact.service';

export class ContactController implements Controller {
  async list(req: Request, res: Response): Promise<Response> {
    const user = req.body.currentUser as User;
    const contacts = await new ListContactService(user).exec();
    return res.status(200).json(contacts);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const user = req.body.currentUser as User;
    const contactId = +req.params.id;
    const contact = await new ShowContactService(contactId, user).exec();
    return res.status(200).json(contact);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { cpf, email, name, telefone } = req.body;

    const contactData = { cpf, email, name, telefone } as Contact;
    const user = req.body.currentUser as User;

    const contact = await new CreateContactService(contactData, user).exec();

    return res.status(200).json(contact);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const user = req.body.currentUser as User;
    const contactId = +req.params.id;
    const { cpf, email, name, telefone } = req.body;
    const contactData = { cpf, email, name, telefone } as Contact;
    const contact = await new UpdatedContactService(
      contactId,
      contactData,
      user
    ).exec();
    return res.status(200).json(contact);
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    const user = req.body.currentUser as User;
    const contactId = +req.params.id;
    const contact = await new DestroyContactService(contactId, user).exec();
    return res.status(200).json(contact);
  }
}
