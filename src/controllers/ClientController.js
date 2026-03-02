const Client = require("../services/ClientService.js");

/**
 * REST controller to get paginated clients.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {Function} next
 */
exports.index = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const perPage = parseInt(req.query.per_page, 10) || 15;
    const result = await Client.paginate(page, perPage);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
