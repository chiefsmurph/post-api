import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema(
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

itemSchema.index({ list: 1, name: 1 }, { unique: true })

export const post = mongoose.model('post', itemSchema)
