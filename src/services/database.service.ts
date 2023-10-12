import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = 'mongodb+srv://dangtai1612001ylvp:dangtai123@cluster0.8p19amx.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export async function run() {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })
    console.log('Pinged your deployment. You successfully connected to MongoDB!')
  } finally {
    await client.close()
  }
}
