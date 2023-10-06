import mongoose from 'mongoose'
import { authorModel } from '~/models/model/author.model'
import { AuthorType } from '~/models/schemas/author.schemas'

export const authorServices = {
  createAuthor: async (payload: Pick<AuthorType, 'author'>) => {
    const response = await authorModel.create({ author: payload.author })

    return {
      message: 'create author successfully',
      data: response
    }
  },

  getAll: async () => {
    const response = await authorModel.find({})
    return {
      message: 'lấy data successfully',
      data: response
    }
  }
}
