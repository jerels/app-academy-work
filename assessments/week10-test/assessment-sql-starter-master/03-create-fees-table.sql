create table fees (
    id serial primary key,
    description varchar(100) not null,
    amount numeric(10, 3) not null,
    invoice_id integer not null,
    foreign key (invoice_id) references invoices (id)
);
