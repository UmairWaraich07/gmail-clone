import React from "react";
import "./Mail.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import { Avatar } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Mail = () => {
  const navigate = useNavigate();
  const selectedMail = useSelector((store) => store.user.selectedMail);
  return (
    <div className="mail">
      <div className="mail__header">
        <div className="mail__header-left">
          <div className="mail__header-left-1">
            <ArrowBackIcon
              className="inbox__header-icon"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="mail__header-left-2">
            <ArchiveOutlinedIcon className="inbox__header-icon" />
            <ReportGmailerrorredOutlinedIcon className="inbox__header-icon" />
            <DeleteOutlinedIcon className="inbox__header-icon" />
            <MailOutlineIcon className="inbox__header-icon" />
            <AccessTimeIcon className="inbox__header-icon" />
            <AddTaskIcon className="inbox__header-icon" />
            <DriveFileMoveOutlinedIcon className="inbox__header-icon" />
            <LabelOutlinedIcon className="inbox__header-icon" />
            <MoreVertOutlinedIcon className="inbox__header-icon" />
          </div>
        </div>
        <div className="mail__header-right">
          <ChevronLeftIcon className="inbox__header-icon" />
          <ChevronRightIcon className="inbox__header-icon" />
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__body-header">
          <h1>{selectedMail?.title}</h1>
          <div className="mail__body-header-icon">
            <LocalPrintshopOutlinedIcon className="inbox__header-icon" />
            <LaunchOutlinedIcon className="inbox__header-icon" />
          </div>
        </div>
        <div className="mail__body-user">
          <div className="mail__body-user-logo">
            <Avatar>{selectedMail?.name[0].toUpperCase()}</Avatar>
          </div>
          <div className="mail__body-user-data">
            <div className="mail__user-left">
              <h4>{selectedMail?.name}</h4>
              <div className="mail__left-div">
                <p>to me</p>
                <ArrowDropDownIcon />
              </div>
            </div>
            <div className="mail__user-right">
              <p>
                {new Date(
                  selectedMail?.timestamp.toDate()
                ).toLocaleTimeString()}
              </p>
              <div className="mail__user-right-icon">
                <StarBorderOutlinedIcon className="inbox__header-icon" />
                <ReplyIcon className="inbox__header-icon" />
                <MoreVertOutlinedIcon className="inbox__header-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="mail__body-message">{selectedMail?.message}</div>
      </div>
    </div>
  );
};

export default Mail;
