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
    const user = req.body.current_user as User;
    const contacts = await ListContactService.exec(user);
    return res.status(200).json(contacts);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const user = req.body.current_user as User;
    const contactId = +req.params.id;
    const contact = await ShowContactService.exec(contactId, user);
    return res.status(200).json(contact);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { cpf, email, name, telefone } = req.body;

    const contactData = { cpf, email, name, telefone } as Contact;
    const user = req.body.current_user as User;

    const contact = await CreateContactService.exec(contactData, user);

    return res.status(200).json(contact);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const user = req.body.current_user as User;
    const contactId = +req.params.id;
    const { cpf, email, name, telefone } = req.body;
    const contactData = { cpf, email, name, telefone } as Contact;
    const contact = await UpdatedContactService.exec(
      contactId,
      contactData,
      user
    );
    return res.status(200).json(contact);
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    const user = req.body.current_user as User;
    const contactId = +req.params.id;
    const contact = await DestroyContactService.exec(contactId, user);
    return res.status(200).json(contact);
  }
}
