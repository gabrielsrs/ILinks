import { Router } from "express"

import { PageController } from "./controllers/pageController.js"
import { FilterController } from "./controllers/filterController.js"
import { SaveController } from "./controllers/saveController.js"
import { RemoveController } from "./controllers/removeController.js"
import { FileTransferController } from "./controllers/fileTransferController.js"

const router = Router()

const pageController = new PageController()
const filterController = new FilterController()
const saveController = new SaveController()
const removeController = new RemoveController()
const fileTransferController = new FileTransferController()

router.get("/", pageController.handle)
router.get("/filter", filterController.handle)
router.post("/save/card", saveController.handle)
router.post("/save/tag", saveController.handle)
router.delete("/remove/card", removeController.handle)
router.delete("/remove/tag", removeController.handle)
router.get("/import", fileTransferController.handle)
router.get("/export", fileTransferController.handle)

export { router }