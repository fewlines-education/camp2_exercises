CREATE TABLE countries (
    id serial PRIMARY KEY,
    code varchar,
    name varchar,
    region_id int2
);


CREATE TABLE departments (
    id serial PRIMARY KEY,
    name varchar,
    manager_id int2,
    location_id int2
);

CREATE TABLE employees (
    id serial PRIMARY KEY,
    first_name varchar,
    last_name varchar,
    email varchar,
    phone_number varchar,
    hire_date date,
    job_id int2,
    salary float,
    commission_pct float,
    manager_id int2,
    departement_id int2
);


CREATE TABLE job_grades (
    id serial PRIMARY KEY,
    level varchar,
    lowest_salary int4,
    highest_salary int4
);

CREATE TABLE job_history (
    id serial PRIMARY KEY,
    employee_id int2,
    start_date date,
    end_date date,
    job_id int2,
    department_id int2
);

CREATE TABLE jobs (
    id serial PRIMARY KEY,
    code varchar,
    title varchar,
    min_salary float,
    max_salary float
);


CREATE TABLE locations (
    id serial PRIMARY KEY,
    street_address varchar,
    postal_code varchar,
    city varchar,
    state_province varchar,
    country_id int2
);

CREATE TABLE regions (
	id serial PRIMARY KEY,
	name varchar
);
