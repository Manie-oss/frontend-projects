import { useState, useEffect } from "react";

const LIMIT = 5;

function UserList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [skip, setSkip] = useState(0);

  async function getData() {
    const data = await fetch(`https://dummyjson.com/user?limit=${LIMIT}&skip=${skip}`);
    const userData = await data.json();
    setTotalPage(Math.ceil(userData.total / LIMIT));
    setUsers(userData.users);
  }

  async function prevPage(){
    setPage((p)=>{
        setSkip(LIMIT*(p-2));
        return p-1;
    });
  }

  async function nextPage(){
    setPage((p)=>{
        setSkip(LIMIT*p);
        return p+1;
    });
  }

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      {users.map((user, ind) => {
        return (
          <div style={{ display: "flex", flexDirection: "column", border:"2px solid black", marginBottom:"2px" }}>
            <div>Name: {user.firstName} {user.lastName}</div>
            <div>Phone: {user.phone}</div>
            <div>Email: {user.email}</div>
          </div>
        );
      })}
        <div style={{display: "flex", justifyContent: "center" }}>
            <button disabled={page <= 1} onClick={prevPage}>prev</button>
            {page}
            <button disabled={page >= totalPage} onClick={nextPage}>next</button>
        </div>
    </div>
  );
}

export default UserList;
