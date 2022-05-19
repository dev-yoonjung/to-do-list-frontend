import { useDispatch } from "react-redux";
import { toggleTodoStatus, removeTodo } from "store/todo/actions";
import { ITodo } from "store/todo/models/todo.model";

import { Tooltip, Tag, Button, Popconfirm, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import ItemStyle from "styles/ItemStyle";

interface ITodoItemProps {
  todo: ITodo;
}

function TodoItem({ todo }: ITodoItemProps) {
  const dispatch = useDispatch();

  const onTodoRemoval = (): void => {
    if (todo.id) {
      dispatch(removeTodo(todo.id));
    }
  };

  const onTodoToggle = (): void => {
    if (todo.id) {
      dispatch(toggleTodoStatus({ ...todo, completed: !todo.completed }));
    }
  };

  return (
    <ItemStyle
      actions={[
        <Tooltip
          title={todo.completed ? "Mark as uncompleted" : "Mark as completed"}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={onTodoToggle}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={onTodoRemoval}
        >
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
