const Customer = require('./database/models/Customer');

const validateEmail = (email) => {
  const emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return emailPattern.test(email);
};

module.exports = {
  Query: {
    customers: () => Customer.findAll(),
    customer: (_, { id }) => Customer.findOne({ where: { id } }),
  },

  Mutation: {
    createCustomer: async (_, { data }) => {
      const { name, email, cpf, birthday } = data;
      const { street, neighborhood, city, state, country, cep, number } = data;
      const MIN_NAME_LENGTH = 3;
      const VALID_CPF_LENGTH = 11;

      if (name.length < MIN_NAME_LENGTH) {
        throw new Error("Name way too short! Try your full name.");
      }
      
      if (!validateEmail(email)) {
        throw new Error("Email must be a valid email.");
      }

      if (cpf.length !== VALID_CPF_LENGTH) {
        throw new Error("Invalid CPF entry.");
      }
      
      const emailAlreadyInUse = await Customer.findOne({ where: { email } });
      
      if (emailAlreadyInUse) {
        throw new Error("Email is already in use.");
      }


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