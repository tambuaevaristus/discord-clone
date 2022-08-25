import React from "react";
import ChatHeader from "./ChatHeader";
import { MdAddCircle } from "react-icons/md";
import Messages from "./Messages";

function Chat() {
  return (
    <div className="col-9 bg-dark d-flex flex-column justify-content-between">
      <div className="  bg-dark text-white">
        <ChatHeader />
        <hr />


  <Messages />
  <Messages />

















      </div>
      <div className="d-flex p-4 justify-content-around border ">
        <MdAddCircle size="40" color="white" />
        <form>
          <input type="text" placeholder={`Message #TESTCHANNEL`} />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
