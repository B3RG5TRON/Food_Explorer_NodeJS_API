const fs = require("node:fs")
const path = require("node:path")

const uploadConfigs = require("../configs/uploads")

class DiskStorageDish {
  async saveFile(file) {
    await fs.promises.rename(
      path.resolve(uploadConfigs.TMP_FOLDER, file),
      path.resolve(uploadConfigs.UPLOADS_FOLDER_DISH, file)
    )

    return file
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfigs.UPLOADS_FOLDER_DISH, file)

    try {
      await fs.promises.stat(filePath)
    } catch {
      return
    }

    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskStorageDish
