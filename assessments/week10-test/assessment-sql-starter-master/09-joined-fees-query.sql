select customers.name, invoices.invoice_number, fees.description, fees.amount
from customers
join invoices on (invoices.customer_id = customers.id)
join fees on (fees.invoice_id = invoices.id)
order by customers.name;
