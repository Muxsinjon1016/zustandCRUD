import React from "react";
import { Button, Form, Input } from "antd";
import { useAddTodo } from "./services/useAddTodo";

export const Create = () => {
  const [form] = Form.useForm();
  const { addTodo } = useAddTodo((state) => state);

  const onFinish = (formData) => {
    addTodo(formData);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateLength = (_, value) => {
    if (value && value.length < 4) {
      return Promise.reject(new Error("It is not enought for todo!"));
    }
    return Promise.resolve();
  };

  return (
    <Form
      form={form}
      name="basic"
      layout="vertical"
      style={{
        maxWidth: 600,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 120,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your Title!",
          },
          {
            validator: validateLength,
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
            message: "Please input your Description!",
          },
          {
            validator: validateLength,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <div className="flex items-center gap-10 justify-center">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="button"
            onClick={() => form.resetFields()}
          >
            Clear all
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default Create;
