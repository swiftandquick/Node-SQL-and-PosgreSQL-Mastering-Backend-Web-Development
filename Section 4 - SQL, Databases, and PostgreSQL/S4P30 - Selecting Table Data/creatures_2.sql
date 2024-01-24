/* Display everything from the wizards table.  */
SELECT * FROM wizards;

/* Display the name column from the wizards table.  */
SELECT name FROM wizards;

/* Display the name and power columns from the wizards table.  */
SELECT name, power FROM wizards;

/* Display 9 rows.  There are 9 different combinations:  3 * 3.  */
SELECT * FROM wizards, elves;

/* Display 27 rows.  There are 27 different combinations:  3 * 3 * 3.  */
SELECT * FROM wizards, elves, hobbits;

/* Display the elves table, data are ordered by speed from slowest to fastest. */
SELECT * FROM elves ORDER BY speed;
SELECT * FROM elves ORDER BY speed ASC;

/* Display the elves table, data are ordered by speed from fatest to slowest. */
SELECT * FROM elves ORDER BY speed DESC;

/* Display the elves table, data are ordered by name in alphabetical order. */
SELECT * FROM elves ORDER BY name;

/* Dispaly the first two entries of the elves table. */
SELECT * FROM elves LIMIT 2;

/* Display entries from the elves table where data's speed is greater than 9. */
SELECT * FROM elves WHERE speed > 9;