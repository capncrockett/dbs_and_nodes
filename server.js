const { Client } = require('pg');

client = new Client({
  host: '0.0.0.0',
  port: 5433,
  user: 'joe',
  password: 'secret',
  database: 'playground',
});

async function main() {
  await client.connect()

  const users = await client.query(
    'SELECT * from users'
  )

  users.rows.forEach(user => {
    console.log(user)
  });

  await client.end()
}

main()