CREATE TABLE brands (
    id uuid PRIMARY KEY,
    title varchar
);

CREATE TABLE categories (
    id uuid PRIMARY KEY,
    decathlon_id integer,
    label varchar
);


CREATE TABLE products (
	id uuid PRIMARY KEY,
	decathlon_id integer,
	title varchar,
	description text,
	brand_id varchar,
	min_price float,
	max_price float,
	crossed_price float,
	percent_reduction integer,
	image_path varchar,
	rating float
);



"id" : "82830e66-b439-4fef-ade8-abb4dce54e6e",
"decathlon_id" :8282689,
"title" : "Corne chasse 14cm",
"description" : "annoncer des phases de chasse en battue.",
"brand_id" : "afa9cfe1-f517-41f0-87d9-6c7b58ef1c13",
"min_price" :9.99,
"max_price" :null,
"crossed_price" :0,
"percent_reduction" :0,
"image_path" : "828/8282689/zoom_52fc3fd48aac4f30a127e90388958eb6.jpg",
"rating" :3;

SELECT c.label
FROM categories c
INNER JOIN products p ON (c.decathlon_id = p.decathlon_id)
;
/*
"name" : "error",
"length" : 95,
"severity" : "ERROR",
"code" : "22P02",
"position" : "35",
"file" : "uuid.c",
"line" : "146",
"routine" : "string_to_uuid";

CREATE TABLE categories_id (
    id INCREMENT PRIMARY KEY,
    name varchar,
    length integer,
    severity varchar code varchar,
    position integer,
    file varchar,
    line integer,
    routine varchar
);
*/
