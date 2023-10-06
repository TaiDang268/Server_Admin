import { Request, Response } from 'express'
// import { authorServices } from '~/services/author.services'
import { ParamsDictionary } from 'express-serve-static-core'
import { AuthorType } from '~/models/schemas/author.schemas'
import { authorServices } from '~/services/author.service'

export const authorControllers = {
  createauthor: async (req: Request<ParamsDictionary, any, Pick<AuthorType, 'author'>>, res: Response) => {
    try {
      const result = await authorServices.createAuthor(req.body)
      return res.json(result)
    } catch (err) {
      console.log(err)
    }
  },

  getAll: async (req: Request, res: Response) => {
    try {
      const result = await authorServices.getAll()
      return res.json(result)
    } catch (err) {
      console.log(err)
    }
  }
}
