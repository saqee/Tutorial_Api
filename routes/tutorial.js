import express from "express"

import {
  create,
  findTitle,
  findPrimary,
  updateData,
  deleteAll,
  findAllPublished,
} from "../controller/tutorial.js"
const router = express.Router()

router.post("/", create)
router.get("/tutorial", findTitle)
router.get("/published", findAllPublished)
router.get("/tutorial/:id", findPrimary)
router.put("/tutorial/:id", updateData).delete(deleteAll)
export default router
