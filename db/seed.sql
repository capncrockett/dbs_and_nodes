create table users
(
    id serial not null unique,
    first_name text,
    email text,
    created_at timestamp,
    updated_at timestamp
);

alter table users owner to joe;

INSERT INTO users (first_name, email) VALUES ('Joe', 'capncrockett@gmail.com');
INSERT INTO users (first_name, email) VALUES ('Erik', 'wright.erikj@gmail.com');
INSERT INTO users (first_name, email) VALUES ('Frank', 'franks2000inchtv@gmail.com');
