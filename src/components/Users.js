import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch((err) => console.log(err));
  };
  console.log(users);
  return (
    <div className="users">
      <h2>Users</h2>
      <button onClick={getUsers}>Get Users</button>
      <div className="users-card">
        {users.map((user) => (
          <div className="useritem" key={user.id}>
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
