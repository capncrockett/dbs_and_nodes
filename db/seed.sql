create table users
(
    id serial not null unique,
    name text,
    email text,
    created_at timestamp,
    updated_at timestamp
);

alter table users owner to joe;

INSERT INTO users (name, email) VALUES ('Joe', 'capncrockett@gmail.com');
INSERT INTO users (name, email) VALUES ('Erik', 'wright.erikj@gmail.com');
