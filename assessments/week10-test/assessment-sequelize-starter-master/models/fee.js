'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fee = sequelize.define('Fee', {
    description: DataTypes.STRING,
    amount: DataTypes.NUMERIC,
    invoiceid: DataTypes.INTEGER
  }, {});
  Fee.associate = function (models) {
    Fee.belongsTo(models.Invoice, {
      foreignKey: 'invoiceId'
    });
  };
  return Fee;
};