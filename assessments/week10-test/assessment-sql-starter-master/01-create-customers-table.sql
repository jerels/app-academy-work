create table customers (
    id serial primary key,
    name varchar(50) not null unique,
    contact_email varchar(200) not null unique
);
