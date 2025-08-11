import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [inputUserToSearch, setInputUserToSearch] = useState('');
  const [debouncedInput, setDebouncedInput] = useState('');

  function searchUser(q) {
    setFilteredUsers(
      users.filter(({ firstName }) =>
        firstName.toLowerCase().includes(q.toLowerCase())
      )
    );
  }

  async function getData() {
    console.log('getData called');
    const data = await fetch(`https://dummyjson.com/user`);
    const userData = await data.json();
    setUsers(userData.users);
    setFilteredUsers(userData.users);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(inputUserToSearch);
    }, 2000);

    return () => clearTimeout(timer);
  }, [inputUserToSearch]);

  useEffect(() => {
      searchUser(debouncedInput);
  }, [debouncedInput]);

  console.log("rendered");

  useEffect(() => {
    console.log('useEffect called');
    getData();
  }, []);

  return (
    <div>
      <input type="text" value={inputUserToSearch} onChange={(e)=>setInputUserToSearch(e.target.value)} placeholder="Search..." />
      <div>
        {filteredUsers.map((user, idx) => (
          <Card user={user} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Users;

function Card({ user }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid black",
        marginBottom: "2px",
      }}
    >
      <div>
        Name: {user.firstName} {user.lastName}
      </div>
      <div>Phone: {user.phone}</div>
      <div>Email: {user.email}</div>
    </div>
  );
}

/* {users.map((user, ind) => {
        return (
          <div style={{ display: "flex", flexDirection: "column", border:"2px solid black", marginBottom:"2px" }}>
            <div>Name: {user.firstName} {user.lastName}</div>
            <div>Phone: {user.phone}</div>
            <div>Email: {user.email}</div>
          </div>
        );
      })} */
