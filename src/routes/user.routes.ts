import { Router } from 'express'
import { userController } from '~/controllers/user.controllers'

const routes = Router()
routes.post('/register', userController.register)

export default routes
