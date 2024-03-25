const ListCar = require("../../models/product.model");

// const searchHelper = require("../../helpers/search");
module.exports.product = async (req, res) => {
  //Bộ lọc filterStatusHelper

  let find = { deleted: false };

  const listcar = await ListCar.find(find);

  res.render("admin/pages/product/index", {
    titlePage: "Danh sách sản phẩm",
    listcar: listcar,
  });
};
