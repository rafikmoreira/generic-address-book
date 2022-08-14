import { User } from '@prisma/client'
import { Request, Response } from 'express'
import { CreateUserService } from '../service/create-user.service'
import { LoginUserService } from '../service/login-user.service'

import { Controller } from './controller'

export class UserController implements Controller {
  async list(req: Request, res: Response): Promise<Response> {
    return res.status(200)
  }

  async login(req: Request, res: Response): Promise<Response> {
    const loginParams = req.body as { email: string; senha: string }
    const userData = await LoginUserService.exec(loginParams)

    return res.status(200).json(userData)
  }

  async show(req: Request, res: Response): Promise<Response> {
    return res.status(200)
  }

  async create(req: Request, res: Response): Promise<Response> {
    const userData = req.body as User
    const user = await CreateUserService.exec(userData)
    return res.status(200).json(user)
  }

  async update(req: Request, res: Response): Promise<Response> {
    return res.status(200)
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    return res.status(200)
  }
}
