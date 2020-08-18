const { Customer, Invoice } = require('../models');

async function lookupCustomerAndInvoicesById(id) {
  return await Customer.findByPk(id, {
    include: Invoice
  });
};

async function lookupCustomersByName(name) {
  return await Customer.findAll({
    where: { name }
  });
};

async function lookupCustomerByInvoiceNumber(invoiceNumber) {
  const inv = await Invoice.findOne({
    where: { invoiceNumber }
  });

  const cust = await Customer.findByPk(inv.customerId);

  return cust;
  // Find invoice by `invoiceNumber` and return associated customer
  // Hint: each invoice has a `customerId`
};

module.exports = {
  lookupCustomerAndInvoicesById,
  lookupCustomersByName,
  lookupCustomerByInvoiceNumber,
};
