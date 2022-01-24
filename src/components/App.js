import React, { useState } from "react";
// Component imports
import CardHolder from "./CardHolder";
import Header from "./Header";
import Spinner from "./Spinner";
// CSS file import
import "../styles/App.css";

const App = () => {
  // user array to store the user data and it later helps us to create list
  const [users, setUsers] = useState([]);
  // show variable is used to show and hide spinner
  const [show, setShow] = useState(false);
  // function is to show what data show spinner or user data
  const showContent = () => {
    if (show) {
      return <Spinner text={"Fetching User Details...Please wait."} />;
    } else {
      return (
        <div className="users-info-holder">
          <CardHolder users={users} />
        </div>
      );
    }
  };
  return (
    <React.Fragment>
      <Header setUsers={setUsers} setShow={setShow} />
      {showContent()}
    </React.Fragment>
  );
};

export default App;
