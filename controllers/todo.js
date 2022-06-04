import { Todo } from '../models/todo.js'
import fetch from 'node-fetch'

const API_URL = process.env.API_BASE_URL

const create = async(req, res) => {
  req.body.userId = req.user.profile
  try{
    const todo = await new Todo(req.body)
    await todo.save()
    return res.status(200).json(todo)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const index = async(req, res) => {
  try{
    const todos = await Todo.find({})
    return res.status(200).json(todos)
  } catch(err) {
    return res.status(500).json(err)
  }
}

const deleteTodo = async(req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id)
    return res.status(204).end()
  } catch(err) {
    return res.status(500).json(err)
  }
}
 
export {
  create,
  index,
  deleteTodo as delete
}