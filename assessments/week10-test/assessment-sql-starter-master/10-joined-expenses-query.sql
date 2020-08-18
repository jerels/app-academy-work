select customers.name, invoices.invoice_number, expenses.description, expenses.number_of_units, expenses.rate
from customers
join invoices on (invoices.customer_id = customers.id)
join expenses on (expenses.invoice_id = invoices.id)
order by customers.name;
