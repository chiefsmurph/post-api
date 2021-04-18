import { Router } from 'express'
import controllers from './post.controllers'

const router = Router()

// /api/post
router
  .route('/')
  .get((req, res, next) => {
    if (req.params.id) {
      controllers.getOne(req, res, next);
    } else {
      controllers.getMany(req, res, next);
    }
  })
  .post(controllers.createOne)

// /api/post/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
