import mongoose from 'mongoose'
import { authorModel } from '~/models/model/author.model'
export const createIndexAuthor = async () => {
  try {
    const checkIndexExists = await authorModel.collection.indexExists(['author_text'])
    if (!checkIndexExists) {
      await authorModel.collection.createIndex({ author: 'text' }, { default_language: 'none' })
    }
  } catch (error) {
    console.error('Lỗi khi tạo chỉ số:', error)
  }
}
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL_MONGOODB as string)
    console.log('connect successfully')
  } catch (error) {
    console.log(error)
  }
}
