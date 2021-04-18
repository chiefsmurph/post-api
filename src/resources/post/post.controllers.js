import { crudControllers } from '../../utils/crud'
import { post } from './post.model'
export default {
  ...crudControllers(post),
  getMany: async (req, res) => {
    try {
      const docs = await post
        .find()
        .sort({ _id: -1 })
        .populate('createdBy', 'username')
        .lean()
        .exec()

      res.status(200).json({ data: docs })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  }
}
