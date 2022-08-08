const { default: axios } = require("axios");

const getAllProducts = async () => {

  const responde = axios.get("https://www.fruityvice.com/api/fruit/all")

  return responde;
};

module.exports = {
  getAllProducts,
};
