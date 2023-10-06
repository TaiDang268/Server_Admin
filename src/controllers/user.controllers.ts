import { Request, Response } from 'express'
import { UserType } from '~/types/user.types'
import { ParamsDictionary } from 'express-serve-static-core'
import { userServices } from '~/services/user.service'

export const userController = {
  register: async (
    req: Request<ParamsDictionary, any, Pick<UserType, 'username' | 'password' | 'email'>>,
    res: Response
  ) => {
    try {
      const result = await userServices.register(req.body)
      return res.json(result)
    } catch (err) {
      console.log(err)
    }
  }
}
