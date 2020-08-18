'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Expenses', {
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
      numberOfUnits: {
        type: Sequelize.NUMERIC(10, 3),
        allowNull: false
      },
      rate: {
        type: Sequelize.NUMERIC(10, 3),
        allowNull: false
      },
      invoiceId: {
        type: Sequelize.INTEGER,
        references: { model: 'Invoices' },
        allowNull: false
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
    return queryInterface.dropTable('Expenses');
  }
};