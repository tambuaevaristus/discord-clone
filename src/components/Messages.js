import React from "react";
import { MdAccountCircle} from "react-icons/md";

function Messages() {
  return (
    <div className="d-flex py-2">
      <MdAccountCircle size={50}/>
      <div className="px-2">
        <h5>Tambua Evaristus <span className="text-muted">timeStamp</span></h5>
        <p>this is the message</p>
      </div>
      <hr/>
    </div>
  );
}

export default Messages;
