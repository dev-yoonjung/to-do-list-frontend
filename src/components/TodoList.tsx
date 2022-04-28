import { List } from "antd";
import TodoItem from "components/TodoItem";

function TodoList() {
  return (
    <List
      locale={{
        emptyText: "There's nothing to do :(",
      }}
      renderItem={() => <TodoItem />}
      pagination={{
        position: "bottom",
        pageSize: 10,
      }}
    />
  );
}

export default TodoList;
