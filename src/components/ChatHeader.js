import React from "react";
import {
  MdLocationOn,
  MdNotifications,
  MdPeopleAlt,
  MdSearch,
  MdSend,
  MdHelp,
} from "react-icons/md";

function ChatHeader() {
  return (
    <div className="d-flex py-3  align-items-center justify-content-between">
      <div className="">
        <h3>
          <span>#</span>Channel Name
        </h3>
      </div>
      <div className=" d-flex">
        <MdNotifications size={20} />
        <MdLocationOn size={20} />
        <MdPeopleAlt size={20}/>
      </div>
      <div className="d-flex border bg-dark">
        <input placeholder="search" />
        <MdSearch size={30} color="white"/>
      </div>

      <MdSend size={30} />
      <MdHelp size={30} />
    </div>
  );
}

export default ChatHeader;
