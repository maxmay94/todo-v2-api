import mongoose from 'mongoose'

const Schema = mongoose.Schema

const todoSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Profile',
    },
    title: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
)

const Todo = mongoose.model('Todo', todoSchema)

export { Todo }