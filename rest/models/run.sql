CREATE TABLE categories
(
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(50)
);

INSERT INTO categories VALUES
(DEFAULT, 'BBQ'),
(DEFAULT,'Gluten-Free'),
(DEFAULT, 'Mexican'),
(DEFAULT, 'Greek');

CREATE TABLE restaurants
(
    id SERIAL NOT NULL PRIMARY KEY,
    name varchar(100),
    category integer REFERENCES categories(id),
    foodDescription varchar(300),
    price integer,
    course varchar(50),
    imageURL varchar(150)

)