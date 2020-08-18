'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Fees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      amount: {
        type: Sequelize.NUMERIC(10, 3),
        allowNull: false
      },
      invoiceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Invoices' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Fees');
  }
};