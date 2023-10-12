import { Router } from 'express'
import { userController } from '~/controllers/user.controllers'
import { HandleAsync } from '~/utils/handleAsync'

const routes = Router()
routes.post('/register', userController.register)
routes.post('/login', HandleAsync(userController.login))

export default routes
