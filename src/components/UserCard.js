import React from "react";
import "../styles/UserCard.css";
// responsible for showing single card
const UserCard = ({ fullName, email, avatar }) => {
  return (
    <div style={{ marginTop: "50px" }} className="card-outside">
      <div className="card" style={{ width: "18rem", padding: "16px" }}>
        <img src={avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-text">
            <h5>
              <i className="bi bi-person-badge-fill icons"></i>&nbsp;&nbsp;
              <span>{fullName}</span>
            </h5>
            <h6>
              <i className="bi bi-envelope-check-fill icons"></i>&nbsp;&nbsp;
              <span mailto={email}>{email}</span>
            </h6>
            <a href={`mailto:${email}`} className="btn btn-primary">
              <i className="bi bi-send-check-fill"></i>&nbsp; Send mail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
