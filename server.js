// Client is a class object to initiate a connection with Postgres.
// pg is a node package for talking to Postgres.
const { Client } = require("pg");

// Make Client a persistent variable with parameters.
const client = new Client({
  host: "0.0.0.0",
  port: 5432,
  user: "joe",
  password: "secret",
  database: "playground",
});

// Kick it all off.
async function main() {
  // connect to the db.
  await client.connect();

  // A real SQL query.
  const users = await client.query("SELECT * from users WHERE id = 2");
  const users2 = await client.query("SELECT * from users");
  const instruments = await client.query("SELECT * FROM instruments")

  
  users.rows.forEach((user) => {
    console.log(user);
  })

  instruments.rows.forEach((user) => {
    console.log(user);
  });

  await client.end();
}

main();
