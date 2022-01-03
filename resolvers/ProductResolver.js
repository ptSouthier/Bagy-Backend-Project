const Product = require('../src/database/models/Product');

module.exports = {
  Query: {
    products: () => Product.findAll(),
    product: (_, { id }) => Product.findOne({ where: { id } }),
  },

  Mutation: {
    createProduct: (_, { data }) => {
      const { name, image, description, weight, price, quantity } = data;

      const productObj = {
        name,
        image,
        description,
        weight,
        price,
        quantity
      };

      const created = Product.create(productObj);

      return created;
    },
    updateProduct: async (_, { id, data }) => {
      const { name, image, description, weight, price, quantity } = data;
      const product = await Product.findOne({ where: { id } });

      name ? product.name = name : null;
      image ? product.image = image : null;
      description ? product.description = description : null;
      weight ? product.weight = weight : null;
      price ? product.price = price : null;
      quantity ? product.quantity = quantity : null;

      const updatedProduct = await product.save();
      return updatedProduct;
    },
    deleteProduct: async (_, { id }) => {
      const deletedProduct = await Product.destroy({ where: { id } });
      
      if (!deletedProduct) {
        throw new Error("Inexistent Product.")
      }

      return true;
    }
  }
};