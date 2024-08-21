import React, { useState } from "react";
import { useAddTodo } from "../create/services/useAddTodo";
import { Table, Button, Modal, Form, Input } from "antd";

export const Home = () => {
  const { data, deleteTodo, editTodo } = useAddTodo((state) => ({
    data: state.data,
    deleteTodo: state.deleteTodo,
    editTodo: state.editTodo,
  }));

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [form] = Form.useForm();

  const showEditModal = (todo) => {
    setCurrentTodo(todo);
    form.setFieldsValue({
      title: todo.title,
      description: todo.description,
    });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (currentTodo) {
          // Use editTodo from the store
          editTodo(
            currentTodo.title,
            currentTodo.description,
            values.title,
            values.description
          );
        }
        setIsModalVisible(false);
        setCurrentTodo(null);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
      render: (_, record) => (
        <div className="actions">
          <Button
            onClick={() => deleteTodo(record.title)}
            className="deleteBtn"
          >
            Delete
          </Button>
          <Button onClick={() => showEditModal(record)} className="editBtn">
            Edit
          </Button>
        </div>
      ),
    },
  ];

  const dataSource = data.map((item) => ({
    key: item.title,
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
      <Modal
        title="Edit Todo"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="editTodoForm">
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input the title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input the description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Home;
