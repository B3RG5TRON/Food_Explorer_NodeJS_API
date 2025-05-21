const AppError = require("../utils/appError")

function verifyFieldsIfEmpty(request, response, next) {

  const object = request.body

  for (const key in object) {

    if (Object.prototype.hasOwnProperty.call(object, key)) {

      if (!object[key]) {
        throw new AppError("Preencha todos os campos", 401)
      }
    }
  }

  return next()
}

module.exports = verifyFieldsIfEmpty
