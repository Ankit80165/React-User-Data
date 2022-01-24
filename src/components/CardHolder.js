import React from "react";
// Component imports
import UserCard from "./UserCard";
// CSS files imports
import "../styles/CardHolder.css";
// Here we create the list
const CardHolder = ({ users }) => {
  const renderedUsers = users.map((user) => {
    return (
      <div key={user.id} className="card-holder">
        <UserCard
          fullName={`${user.first_name} ${user.last_name}`}
          email={user.email}
          avatar={user.avatar}
        />
      </div>
    );
  });
  return <div className="wrapper">{renderedUsers}</div>;
};

export default CardHolder;
