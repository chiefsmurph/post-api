import { post } from '../post.model'
import mongoose from 'mongoose'

describe('post model', () => {
  describe('schema', () => {
    test('url', () => {
      const url = post.schema.obj.url
      expect(url).toEqual({
        type: String,
        required: true,
        trim: true,
        maxlength: 200
      })
    })

    test('createdBy', () => {
      const createdBy = post.schema.obj.createdBy
      expect(createdBy).toEqual({
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        required: true
      })
    })
  })
})
