const { Pool } = require('pg');

const allPuppies = `
    select id, name, age_yrs, breed, weight_lbs, microchipped
    from puppies;
`;

const singlePuppy = `
    select id, name, age_yrs, breed, weight_lbs, microchipped
    from puppies
    where id = $1;
`;

const pool = new Pool({
    database: 'animals'
});

async function selectOnePuppy(puppyId) {
    const res = await pool.query(singlePuppy, [puppyId]);
    console.log(res.rows);
    pool.end();
}

const id = Number.parseInt(process.argv[2]);
selectOnePuppy(id);

// async function selectAllPuppies() {
//     const res = await pool.query(allPuppies);
//     console.log(res.rows);
//     pool.end();
// }

// selectAllPuppies();