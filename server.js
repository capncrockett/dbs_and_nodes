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
  // const users = await client.query("SELECT * from users");

  // const instruments = await client.query("SELECT * from instruments");

  // // console.log(instruments.rows);

  // const familiesPercussion = instruments.rows.filter(
  //   (instrument) => instrument.family === "percussion"
  // );
  // console.log(familiesPercussion);

  // const families = instruments.rows.map((instrument) => instrument.family);
  // console.log(families);

  // const x = function () {
  //   console.log('I am the x log')
  // }

  // const y = function (callback) {
  //   callback ()
  //   console.log("I used your argument")
  // }

  // y(x)

  const add = function (a, b) {
    return a + b;
  };

  const multiply = function (a, b) {
    return a * b;
  };

  const calc = function (num1, num2, callback) {
    console.log("silly string");
    num1 += num1
    num2 += num2
    return callback(num1, num2);
  };

  console.log(calc(2, 3, multiply));
  console.log(calc(2, 3, add));

  console.log(multiply(2, 3));

  // console.log(users.rows)

  // const firstNames = users.rows.map((user) => user.first_name)
  //   console.log(firstNames)

  // const emails = users.rows.map((user) => user.email)
  //   console.log(emails)

  // const userObjects = users.rows;
  // console.log(userObjects);

  // const emails = users.rows.map((row) => row.email);
  // console.log(emails);

  // const names = users.rows.map(function (row) {
  //   return row.first_name;
  // });

  // const names = users.rows.map((row) => {
  //   const name = row.first_name;
  //   console.log(name);
  //   return name.toUpperCase();
  // });

  // console.log(names);

  await client.end();
}

main();
