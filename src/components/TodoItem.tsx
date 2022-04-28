import { Tooltip, Tag, Button, Popconfirm, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import ItemStyle from "styles/ItemStyle";

function TodoItem() {
  return (
    <ItemStyle
      actions={[
        <Tooltip>
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
          />
        </Tooltip>,
        <Popconfirm title="Are you sure you want to delete?">
          <Button className="remove-todo-button" type="primary" danger>
            X
          </Button>
        </Popconfirm>,
      ]}
      className="list-item"
    >
      <div className="todo-item"></div>
    </ItemStyle>
  );
}

export default TodoItem;
