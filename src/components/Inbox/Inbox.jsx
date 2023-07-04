import React, { useEffect, useRef, useState } from "react";
import "./Inbox.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/Inbox";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import InboxMessage from "../InboxMessage/InboxMessage";
import { useSelector } from "react-redux";

const Inbox = () => {
  const { mails } = useSelector((store) => store.user);
  const [scrollTop, setScrollTop] = useState(null);

  const inboxHeading = (Icon, title, active) => (
    <div className={`inbox__heading ${active && "inbox__heading-active"}`}>
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div className="inbox" onScroll={handleScroll}>
      <div className={`inbox__header ${scrollTop > 10 && "inbox__boxshadow"}`}>
        <div className="inbox__header-left">
          <CheckBoxOutlineBlankIcon className="inbox__header-icon" />
          <ExpandMoreIcon className="inbox__header-icon" />
          <RefreshIcon className="inbox__header-icon" />
          <MoreVertIcon className="inbox__header-icon" />
        </div>
        <div className="inbox__header-right">
          <ChevronLeftIcon className="inbox__header-icon" />
          <ChevronRightIcon className="inbox__header-icon" />
        </div>
      </div>

      <div className="inbox__headings">
        {inboxHeading(InboxIcon, "Primary", true)}
        {inboxHeading(SellOutlinedIcon, "Promotions", false)}
        {inboxHeading(PeopleAltOutlinedIcon, "Social", false)}
      </div>

      <div className="inbox__messages">
        {mails.map(({ id, data: { name, title, message, timestamp } }) => (
          <InboxMessage
            key={id}
            id={id}
            name={name}
            title={title}
            message={message}
            timestamp={timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default Inbox;
