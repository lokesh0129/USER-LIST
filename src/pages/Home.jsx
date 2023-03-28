import UserDetailsCard from "../components/UserDetailsCard";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home({ users, setUsers }) {
  const [searchUsers, setSearchUsers] = useState("");
  const [displayUsers, setDisplayUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setDisplayUsers(
      users.filter((user) => {
        return user.name.includes(searchUsers);
      })
    );
  }, [users, searchUsers]);
  return (
    <div className="container mt-5">
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={(e) => {
            setSearchUsers(e.target.value);
          }}
        />
      </div>
      <div className="d-flex justify-content-end mt-3">
        <Button type="primary" onClick={() => navigate("/create")}>
          Add User
        </Button>
      </div>

      <div className="mt-5 d-flex flex-wrap gap-4 ">
        {displayUsers.map((user) => {
          return (
            <UserDetailsCard
              name={user.name}
              dob={new Date(user.dob)}
              gender={user.gender}
              city={user.city}
              key={user.id}
              deleteUser={setUsers}
              id={user.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
