/* Create a creaturesdb table. */
CREATE TABLE creaturesdb;

/* name and power are string with up to characters. */
CREATE TABLE wizards(
    name character varying(50), 
    power character varying(50)
);

/* name is a string with up to characters. 
speed is a floating point number. */
CREATE TABLE elves(
    name character varying(50), 
    speed real
);

/* name and personality are string with up to characters. */
CREATE TABLE hobbits(
    name character varying(50), 
    personality character varying(50)
);

/* wizard and elf are string with up to characters. */
CREATE TABLE allies(
    wizard character varying(50),
    elf character varying(50)
);

/* elf and guardian are string with up to characters. */
CREATE TABLE guardians(
    elf character varying(50),
    hobbit character varying(50)
);

/* Insert 3 elements into wizards table. */ 
INSERT INTO wizards(name, power) 
VALUES 
('Gandalf', 'fireworks'), 
('Sauron', 'rings'), 
('Saruman', 'betrayal');

/* Insert 3 elements into elves table. */ 
INSERT INTO elves(name, speed) 
VALUES 
('Legolas', 10), 
('Arwen', 9), 
('Elrond', 5);

/* Insert 3 elements into hobbits table. */ 
INSERT INTO hobbits(name, personality) 
VALUES 
('Frodo', 'careful'), 
('Sam', 'brave'), 
('Bilbo', 'greedy');

/* Create alliance between alliance between wizard and elf, there are 4 entries. */
INSERT INTO allies(wizard, elf) 
VALUES 
('Gandalf', 'Legolas'), 
('Gandalf', 'Arwen'), 
('Saruman', 'Elrond'), 
('Saruman', 'Legolas');

/* Create relationships of which elf will protect which hobbit, there are 4 entries. */
INSERT INTO guardians(elf, hobbit) 
VALUES 
('Legolas', 'Frodo'), 
('Arwen', 'Sam'), 
('Elrond', 'Bilbo');