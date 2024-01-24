/* Display everything from the allies table.  */
SELECT * FROM allies;

/* Display everything from the guardians table. */
SELECT * FROM guardians;

/* Join the allies table with the elves table based on elf from allies table and name from elves table. */
SELECT * FROM allies JOIN elves ON allies.elf = elves.name;

/* Join the guardians table with the hobbits table based on hobbit from guardians table and name from hobbits table. */
SELECT * FROM guardians JOIN hobbits ON guardians.hobbit = hobbits.name;

/* Join the guardians, hobbits, and elves tables together.  */
SELECT * FROM guardians JOIN hobbits ON guardians.hobbit = hobbits.name JOIN elves ON guardians.elf = elves.name;