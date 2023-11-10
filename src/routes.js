import { Router } from "express"

import { LinkPageController } from "./controllers/linkPageController.js"
import { FilterController } from "./controllers/filterController.js"
import { SaveLinkController } from "./controllers/saveLinkController.js"
import { SaveTagController } from "./controllers/saveTagController.js"
import { UpdateLinkController } from "./controllers/updateLinkController.js"
import { UpdateTagController } from "./controllers/updateTagController.js"
import { RemoveLinkController } from "./controllers/removeLinkController.js"
import { RemoveTagController } from "./controllers/removeTagController.js"
import { FileTransferController } from "./controllers/fileTransferController.js"

const router = Router()

const linkPageController = new LinkPageController()
const filterController = new FilterController()
const saveLinkController = new SaveLinkController()
const saveTagController = new SaveTagController()
const updateLinkController = new UpdateLinkController()
const updateTagController = new UpdateTagController()
const removeLinkController = new RemoveLinkController()
const removeTagController = new RemoveTagController()
const fileTransferController = new FileTransferController()

router.get("/", linkPageController.handle)
router.get("/filter", filterController.handle)
router.post("/save/link", saveLinkController.handle)
router.post("/save/tag", saveTagController.handle)
router.patch("/update/link/:id/", updateLinkController.handle)
router.patch("/update/tag/:id", updateTagController.handle)
router.delete("/remove/link/:id", removeLinkController.handle)
router.delete("/remove/tag/:id", removeTagController.handle)
router.get("/import", fileTransferController.handle)
router.get("/export", fileTransferController.handle)

export { router }