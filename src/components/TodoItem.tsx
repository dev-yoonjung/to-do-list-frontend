import { ITodo } from "store/todo/models/todo.model";

import { Tooltip, Tag, Button, Popconfirm, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import ItemStyle from "styles/ItemStyle";

interface ITodoItemProps {
  todo: ITodo;
}

function TodoItem({ todo }: ITodoItemProps) {
  return (
    <ItemStyle
      actions={[
        <Tooltip
          title={todo.completed ? "Mark as uncompleted" : "Mark as completed"}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <Popconfirm title="Are you sure you want to delete?">
          <Button className="remove-todo-button" type="primary" danger>
            X
          </Button>
        </Popconfirm>,
      ]}
      className="list-item"
      key={todo.id}
    >
      <div className="todo-item">
        <Tag color={todo.completed ? "cyan" : "red"} className="todo-tag">
          {todo.name}
        </Tag>
      </div>
    </ItemStyle>
  );
}

export default TodoItem;
