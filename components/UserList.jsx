import { React, useState, useEffect } from "react";
import User from "./User";

const UserList = ({ user }) => {
  const USER_API_BASE_URL = "http://localhost:8080/api/getUsers";
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [responseUser, setResponseUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [user, responseUser]);



  return (
    <>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th >
                  First Name
                </th>
                <th >
                  Last Name
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {users?.map((user) => (
                  <User
                    user={user}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
   
    </>
  );
};

export default UserList;
