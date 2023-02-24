import { Component } from "react";
import { gettingAllEmployee } from "../../../APIList";
import "../hrdesk.css";
import { Space, Table, Alert } from "antd";
import Loading from "../../Loader/Loading";

import AddModel from "./AddModel";
import ActionsEmployee from "./ActionsEmployee";


class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empData: [],
      isLoading: false,
      error: "",
      isModalOpen: false,
    };
  }

  gettingAllEmployee = async () => {
    this.setState({
      isLoading: true,
    });
    try {
      const response = await gettingAllEmployee();
      this.setState({
        empData: response,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error: "Failed while fetching data..!" + error.message,
      });
    }
  };
  componentDidMount() {
    this.gettingAllEmployee();
  }

  renderAction = (data) => {
    return (
      <Space>
        <ActionsEmployee id={data.id}></ActionsEmployee>
      </Space>
    );
  };

  columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "emp_name",
      key: "emp_name",
    },
    {
      title: "Email",
      dataIndex: "emp_email",
      key: "emp_email",
    },
    {
      title: "Actions",
      dataIndex: "action",
      render: (text, row) => this.renderAction(row),
    },
  ];
  render() {
    const { empData, error, isLoading } = this.state;
    return (
      <div className="employeemain">
        <h2>Employe details</h2>
        <AddModel></AddModel>
        {isLoading && <Loading />}
        {error && <Alert description={error} type="error" showIcon />}
        <Table
          className="employeetable"
          size="small"
          dataSource={empData}
          columns={this.columns}
        />
      </div>
    );
  }
}

export default EmployeeDetails;
