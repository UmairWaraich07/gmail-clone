import React from "react";
import "./InboxMessage.css";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";
import { setSelectedMail } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

const InboxMessage = ({ id, name, title, message, timestamp }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + " ... ";
    } else {
      return str;
    }
  };

  const truncateTitle = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  };

  const openMail = () => {
    dispatch(
      setSelectedMail({
        id,
        name,
        title,
        message,
        timestamp,
      })
    );
    navigate("/mail");
  };

  return (
    <div className="inboxMessage" onClick={openMail}>
      <div className="inboxMessage__left">
        <CheckBoxOutlineBlankOutlinedIcon className="inboxMessage__left-icon" />
        <StarBorderIcon className="inboxMessage__left-icon" />
        <h4>{name}</h4>
      </div>
      <div className="inboxMessage__middle">
        <h4 style={{ marginRight: "5px" }}>{truncateTitle(title, 30)} </h4>{" "}
        <p style={{ marginLeft: "5px" }}>
          {" - "}
          {truncateString(message, 50)}
        </p>
      </div>
      <div className="inboxMessage__right">
        <p>{new Date(timestamp?.toDate()).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default InboxMessage;
