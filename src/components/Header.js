import React from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

const Header = ({ setUsers, setShow }) => {
  const fetchUserData = async () => {
    try {
      // logic for fetching user data
      const response = await axios.get("https://reqres.in/api/users", {
        params: {
          page: "1",
        },
      });

      setShow(false);
      setUsers(response.data.data);
    } catch (error) {
      // error handling part
      setShow(false);
      swal("Some error occurs...try again", "", "error");
    }
  };
  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Angellist User Data</span>
        <div className="navbar-right">
          <button
            className="btn navbar-btn btn-success"
            onClick={() => {
              setShow(true);
              fetchUserData();
            }}
          >
            Get Users information
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
