import { Form, Row, Col, Button, Input } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

import FormStyle from "styles/FormStyle";

function AddTodoForm() {
  const [form] = Form.useForm();

  return (
    <FormStyle form={form} layout="horizontal" className="todo-form">
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "This field is required." }]}
          >
            <Input placeholder="What needs to be done?" autoComplete="off" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" htmlType="submit" block>
            <PlusCircleFilled />
            Add todo
          </Button>
        </Col>
      </Row>
    </FormStyle>
  );
}

export default AddTodoForm;
