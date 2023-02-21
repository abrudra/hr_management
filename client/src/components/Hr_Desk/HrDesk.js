import Sidebar from "./Sidebar";
import "./hrdesk.css";

const { Component } = require("react");

class HrDesk extends Component{
    render(){
        return (
          <div className="hrmain" >
            <Sidebar></Sidebar>
            
          </div>
        );
    }
}

export default HrDesk;