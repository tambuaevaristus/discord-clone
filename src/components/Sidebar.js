import React from "react";
import { MdExpandMore,MdHeadset,MdSettings, MdAdd,MdMic ,MdSignalCellularAlt,MdPerson ,MdInfo,MdCall} from "react-icons/md";
import SidebarChannel from "./SidebarChannel";

function Sidebar() {
  return (
    <div className="col-3 bg-dark text-white px-5">
      <div className="bg-dark">
        <div className=" d-flex justify-content-around py-3 px-2">
          <h5>Tambua Evaristus </h5>
          <MdExpandMore size={30} />
        </div>
      </div>
<hr/>
      <div className="bg-dark text-muted">
        <div className=" d-flex justify-content-around ">
          <MdExpandMore size={30} />
          <h5>Test Channels </h5>
          <MdAdd size={30} />
        </div>

        <div className="text-center mb-5">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
        </div>
      </div>
      <hr className=""/>

      <div className="d-flex  justify-content-between ">
           
            <MdSignalCellularAlt
             size={60}
            />
            <div className="">
               <h5> Voice <br/> Connected</h5>
               <p>Stream</p>
            </div>
            <div className="d-flex flex-column justify-content-between ">
                <MdInfo />
                <MdCall />
            </div>

            
            
      </div>

      <hr/>

      <div className="d-flex text-center justify-content-between">
                <MdPerson  size="60"/>
                <div>
                    <h5>@tambua</h5>
                    <p>#myIdhere</p>
                </div>
                <div className="d-flex flex-column justify-content-between ">
                    <MdMic />
                    <MdHeadset />
                    <MdSettings />
                </div>
            </div>

    </div>
  );
}

export default Sidebar;
