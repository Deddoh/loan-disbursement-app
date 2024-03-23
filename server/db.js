const pgPool = require("pg").Pool;

const pool = new pgPool({
    user: "postgres",
    password: "",
    host:"localhost",
    port:5432,
    database: "loandisbursement"
})

module.exports = pool;