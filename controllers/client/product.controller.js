const ListCar = require("../../models/product.model");

module.exports.product = async (req, res) => {
  const listcar = await ListCar.find();
  const newlistcar = listcar.map((item) => {
    item.pricenew = (
      ((100 - item.discountPercentage) * item.price) /
      100
    ).toFixed(0);
    return item;
  });

  res.render("client/pages/product/index", { listcar: newlistcar });
};
