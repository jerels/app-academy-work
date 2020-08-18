create table invoices (
    id serial primary key,
    invoice_number varchar(20) not null unique,
    created_at timestamp default current_timestamp not null,
    paid_on timestamp,
    customer_id integer not null,
    foreign key (customer_id) references customers (id)
);
