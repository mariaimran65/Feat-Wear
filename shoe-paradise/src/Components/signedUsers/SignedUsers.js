import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Users() {
  let [myUsers, setMyUsers] = useState([]);
  //   let dispatch = useDispatch();
  const users = async () => {
    await axios.get("/users-lao").then(function (resp) {
      setMyUsers(resp.data);
      console.log(resp.data);
    });
  };
  useEffect(() => {
    users();
  }, []);
  // let myUsers = useSelector((store) => store.authSection).users;

  return (
    <div>
      {myUsers.map((user, meraIndex) => {
        return (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.password}</td>
            <td>
              <button
                onClick={async () => {
                  try {
                    const response = await axios.delete(
                      `/delete-user/${user._id}`
                    );
                    if (response.status === 200) {
                      console.log(response.data);
                      myUsers.splice(meraIndex, 1);
                      setMyUsers([...myUsers]);
                    }
                  } catch (err) {
                    console.log(err, " some error occoured");
                  }
                }}
              >
                Delete
              </button>
            </td>
            <td>
              <Link to={"/signup/" + user._id}>Edit</Link>
            </td>
          </tr>
        );
      })}
    </div>
  );
}

export default Users;
