import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200
    },
    message: {
      type: String,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    },
  },
  { timestamps: true }
)

postSchema.index({ url: 1, createdBy: 1 }, { unique: true })

export const post = mongoose.model('post', postSchema)
