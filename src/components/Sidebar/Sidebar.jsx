import React from "react";
import "./Sidebar.css";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarOption from "../SidebarOption/SidebarOption";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { setCompose } from "../../features/user/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <div className="sidebar__compose">
        <div
          className="sidebar__compose-div"
          onClick={() => dispatch(setCompose())}
        >
          <CreateOutlinedIcon />
          <p>Compose</p>
        </div>
      </div>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        active={true}
        message={54}
      />
      <SidebarOption Icon={StarBorderIcon} title="Starred" />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
      <SidebarOption Icon={SendIcon} title="Sent" />
      <SidebarOption
        Icon={InsertDriveFileOutlinedIcon}
        title="Drafts"
        message={24}
      />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />
      <div className="sidebar__label">
        <h4>Labels</h4>
        <AddIcon />
      </div>
    </div>
  );
};

export default Sidebar;
