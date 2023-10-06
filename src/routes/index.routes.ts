import { Application } from 'express'
import userRoutes from './user.routes'

export const routes = (app: Application) => {
  app.use('/api/auth/', userRoutes)
}
