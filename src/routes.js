import { Router } from "express"

import { LinkPageController } from "./controllers/linkPageController.js"
import { FilterController } from "./controllers/filterController.js"
import { SaveLinkController } from "./controllers/saveLinkController.js"
import { SaveTagController } from "./controllers/saveTagController.js"
import { RemoveController } from "./controllers/removeController.js"
import { FileTransferController } from "./controllers/fileTransferController.js"

const router = Router()

const linkPageController = new LinkPageController()
const filterController = new FilterController()
const saveLinkController = new SaveLinkController()
const saveTagController = new SaveTagController()
const removeController = new RemoveController()
const fileTransferController = new FileTransferController()

router.get("/", linkPageController.handle)
router.get("/filter", filterController.handle)
router.post("/save/link", saveLinkController.handle)
router.post("/save/tag", saveTagController.handle)
router.delete("/remove/link", removeController.handle)
router.delete("/remove/tag", removeController.handle)
router.get("/import", fileTransferController.handle)
router.get("/export", fileTransferController.handle)

export { router }