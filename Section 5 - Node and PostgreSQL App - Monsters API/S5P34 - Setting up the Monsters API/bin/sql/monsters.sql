/* id is an autoincrementing integer.
name and personality are strings with up to 50 characters. */
CREATE TABLE monsters(
    id serial,
    name character varying(50),
    personality character varying(50)
);

/* id is an autoincrementing integer.
name and climate are strings with up to 50 characters. 
temperature is an integer. */
CREATE TABLE habitats(
    id serial,
    name character varying(50),
    climate character varying(50),
    temperature int
);

/* Represents the relationship between monsters and habitats, as in which monster live in which habitat. */
CREATE TABLE lives(
    monster character varying(50), 
    habitat character varying(50)
);

/* Insert 3 entries into monsters table. */
INSERT INTO monsters(name, personality) 
VALUES 
('Fluffy', 'aggressive'), 
('Noodles', 'impatient'), 
('Rusty', 'passionate');

/* Insert 3 entries into habitats table. */
INSERT INTO habitats(name, climate, temperature) 
VALUES 
('desert', 'dry', 100), 
('forest', 'haunted', 70), 
('mountain', 'icy', 30);

/* Insert 3 entries into lives table. */
INSERT INTO lives(monster, habitat) 
VALUES 
('Fluffy', 'desert'), 
('Noodles', 'forest'), 
('Rusty', 'mountain');