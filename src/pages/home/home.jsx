import React from "react";
import { useAddTodo } from "../create/services/useAddTodo";
import { Link } from "react-router-dom";
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

export const Home = () => {
  const { data } = useAddTodo((state) => state);

  const dataSource = data.map((item) => ({
    title: item.title,
    description: item.description,
  }));

  return (
    <>
      <Table
        pagination={{ pageSize: 6 }}
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
};

export default Home;
