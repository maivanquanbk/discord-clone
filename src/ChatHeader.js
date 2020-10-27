import {
  EditLocationRounded,
  HelpRounded,
  Notifications,
  PeopleAltRounded,
  SearchRounded,
  SendRounded,
} from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import "./ChatHeader.css";
import { selectChannelName } from "./features/appSlice";

function ChatHeader() {
 const currentChannelName = useSelector(selectChannelName)

  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {currentChannelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <div className="chatHeader__icons">
          <Notifications />
          <EditLocationRounded />
          <PeopleAltRounded />
        </div>

        <div className="chatHeader__search">
          <input placeholder="Search"></input>
          <SearchRounded />
        </div>

        <div className="chatHeader__icons">
          <SendRounded />
          <HelpRounded />
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
