const AdmClients = require("../models/AdmClient.js");

/**
 * Get paginated clients from admClientes table.
 * @param {number} page
 * @param {number} perPage
 * @returns {Promise<Object>} Paginated result
 */
exports.getPaginatedClients = async (page = 1, perPage = 15) => {
  const offset = (page - 1) * perPage;
  const { count, rows } = await AdmClients.findAndCountAll({
    offset,
    limit: perPage,
    order: [["CIDCLIENTEPROVEEDOR", "ASC"]],
  });
  return {
    meta: {
      total: count,
      per_page: perPage,
      current_page: page,
      last_page: Math.ceil(count / perPage),
    },
    data: rows,
  };
};
