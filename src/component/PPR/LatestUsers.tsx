async function getUsers() {
  // Simulate slow API
  'use cache'
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {
      cache: 'no-store',
    }
  );

  return res.json();
}

export default async function LatestUsers() {
  const users = await getUsers();

  return (
    <div>
      <h2>Latest Users</h2>

      <ul>
        {users.map((user: any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}