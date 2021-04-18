import { Router } from 'express'
import controllers from './post.controllers'

const router = Router()

router
  .route('/screenshot')
  .get(controllers.screenshotUrl)
  
// /api/post
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)

// /api/post/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)


export default router
