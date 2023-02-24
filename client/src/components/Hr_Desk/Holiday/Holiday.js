import React, { Component } from "react";
import { Table } from "antd";
import { getHolidayList } from "../../../APIList";


const columns = [
  {
    title: "Sr. No.",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "Holiday Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
];

class HolidayList extends Component {
  state = {
    holidays: [],
  };

  componentDidMount() {
    this.fetchHolidays();
  }

  fetchHolidays = async () => {
    const formattedData = await getHolidayList();
    this.setState({ holidays: formattedData });
  };

  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.state.holidays}
        pagination={false}
        rowKey="index"
        size="small"
      />
    );
  }
}

export default HolidayList;
