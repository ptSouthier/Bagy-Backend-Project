const customers = [
  {
    id: "c1",
    name: "Fulano Pereira Silva",
    email: "fulano@uol.com.br",
    cpf: "12378945657",
    birthday: "16/02/1980",
    address: {
      street: "Rua de exemplo",
      neighborhood: "Vista Alegre",
      city: "Bertioga",
      state: "SP",
      country: "Brasil",
      cep: "11250000",
      number: "480",
    },
  },
  {
    id: "c2",
    name: "Enzo Carlos",
    email: "enzinho@bol.com.br",
    cpf: "15715715733",
    birthday: "31/12/2000",
    address: {
      street: "Rua perto da outra",
      neighborhood: "Indaía",
      city: "Bertioga",
      state: "SP",
      country: "Brasil",
      cep: "11250000",
      number: "888",
    },
  },
]

module.exports = {
  Query: {
    customers: () => customers,
    customer: (_, { id }) => {
      const customer = customers.find((customer) => customer.id === id);

      if (!customer) {
        throw new Error("ERROR STATUS 404: Customer does not exist!");
      }

      return customer;
    },
  },

  Mutation: {
    createCustomer: (_, { data }) => {
      const { name, email, cpf, birthday } = data;
      const { street, neighborhood, city, state, country, cep, number } = data;
      
      const customerID = customers.length + 1; //consultar length da tabela customers no db para obter dinamismo

      const addressObj = {
        street,
        neighborhood,
        city,
        state,
        country,
        cep,
        number,
      };

      const customerObj = {
        id: `c${customerID}`,
        name,
        email,
        cpf,
        birthday,
        address: addressObj,
      };

      customers.push(customerObj);

      // Subir as infos em sua respectiva tabela no db
      return customerObj;
    },
  }
};