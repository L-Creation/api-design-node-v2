import express from 'express'
import userController from './user.controller'

export const userRouter = express.Router()

// ILike a middleware, it's doing a job on the param, and pass it next to the route which follow
userRouter.param('id', userController.findByParam)

userRouter.route('/')
  .get(userController.getAll)
  .post(userController.createOne)

userRouter.route('/:id')
  .get(userController.getOne)
  .put(userController.updateOne)
  .delete(userController.createOne)
