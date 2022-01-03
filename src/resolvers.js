const Customer = require('./database/models/Customer');

module.exports = {
  Query: {
    customers: () => Customer.findAll(),
    customer: (_, { id }) => Customer.findOne({ where: { id } }),
  },

  Mutation: {
    createCustomer: (_, { data }) => {
      const { name, email, cpf, birthday } = data;
      const { street, neighborhood, city, state, country, cep, number } = data;

      const customerObj = {
        name,
        email,
        cpf,
        birthday,
        address: {
          street,
          neighborhood,
          city,
          state,
          country,
          cep,
          number,
        },
      };

      Customer.create(customerObj);

      return customerObj;
    },
  }
};