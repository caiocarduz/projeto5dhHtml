'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('produtos', [{
      nome: 'prato',
      url: './img/pratos.jpg',
      preco: 200.99,
      posicao: "2",
      categoria: "utensilios",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'celular',
      url: './img/celular.jpg',
      preco: 3000.99,
      posicao: "2",
      categoria: "eletrônicos",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'tv',
      url: './img/tv.png',
      preco: 2000.99,
      posicao: "2",
      categoria: "eletrônicos",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'furadeira',
      url: './img/furadeira.jpg',
      preco: 500.99,
      posicao: "carrosel footer",
      categoria: "eletrônicos",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Quebra-Cabeça',
      url: './img/brinquedos.jpg',
      preco: 100.99,
      posicao: "carrosel footer",
      categoria: "brinquedos",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Quebra-Cabeça',
      url: './img/brinquedos.jpg',
      preco: 100.99,
      posicao: "2 footer",
      categoria: "brinquedos",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'cueca Zorba',
      url: './img/foto_cueca.jpg',
      preco: 20.99,
      posicao: "2",
      categoria: "Roupas",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'cueca Zorba',
      url: './img/foto_cueca.jpg',
      preco: 20.99,
      posicao: "3",
      categoria: "Roupas",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'cueca Zorba',
      url: './img/foto_cueca.jpg',
      preco: 20.99,
      posicao: "carrosel footer",
      categoria: "Roupas",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Iphone 8',
      url: './img/iphone.jpg',
      preco: 2500.99,
      posicao: "2",
      categoria: "eletrônicos",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Iphone 8',
      url: './img/iphone.jpg',
      preco: 2500.99,
      posicao: "3",
      categoria: "eletrônicos",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Iphone 8',
      url: './img/iphone.jpg',
      preco: 2500.99,
      posicao: "carrosel footer",
      categoria: "eletrônicos",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Carro BMW',
      url: './img/carro.jpg',
      preco: 25000.99,
      posicao: "3",
      categoria: "veículos",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Carro BMW',
      url: './img/carro.jpg',
      preco: 25000.99,
      posicao: "2",
      categoria: "veículos",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Carro BMW',
      url: './img/carro.jpg',
      preco: 25000.99,
      posicao: "carrosel footer",
      categoria: "veículos",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Vestido Feminino',
      url: './img/roupas.jpg',
      preco: 25000.99,
      posicao: "3",
      categoria: "vestuário",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Vestido Feminino',
      url: './img/roupas.jpg',
      preco: 25000.99,
      posicao: "2",
      categoria: "vestuário",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Vestido Feminino',
      url: './img/roupas.jpg',
      preco: 25000.99,
      posicao: "carrosel footer",
      categoria: "vestuário",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome: 'Vestido Feminino',
      url: './img/roupas.jpg',
      preco: 25000.99,
      posicao: "2",
      categoria: "vestuário",
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ]);
   
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('produtos', null, {});
  
  }
};
