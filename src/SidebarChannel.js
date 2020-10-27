import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setChannelInfo, selectChannelId } from "./features/appSlice";
import "./SidebarChannel.css";

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();
  const selectedChannelId = useSelector(selectChannelId);

  const handleClick = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );
  };

  return (
    <div
      className={
        id === selectedChannelId
          ? "sidebarChannel sidebarChannel__selected"
          : "sidebarChannel"
      }
      onClick={handleClick}
    >
      <h4>
        <span className="sidebarChannel__hash">#</span> {channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
