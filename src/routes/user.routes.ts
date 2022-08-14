import { Router } from 'express'
import { UserController } from '../controller/user.controller'

const userRouter = Router()
const userController = new UserController()

userRouter.post('/user/login', userController.login)
userRouter.post('/user/cadastro', userController.create)

export default userRouter
