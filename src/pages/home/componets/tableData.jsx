import React from "react";
import { Table, Button } from "antd";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Actions",
    dataIndex: "action",
    key: "action",
    render: () => {
      return (
        <div className="actions">
          <Button className="deleteBtn">Delete</Button>
          <Button className="editBtn">Edit</Button>
        </div>
      );
    },
  },
];

export const TableData = ({ title, description }) => {
  const dataSource = [
    {
      title,
      description,
    },
  ];

  return (
    <>
      <Table
        pagination={{ pageSize: 5 }}
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
};

export default TableData;
