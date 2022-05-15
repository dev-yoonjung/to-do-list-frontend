import { ITodo } from "store/todo/models/todo.model";

import { List } from "antd";
import TodoItem from "components/TodoItem";

interface ITodoListProps {
  todos: ITodo[] | undefined;
}

function TodoList({ todos = [] }: ITodoListProps) {
  return (
    <List
      locale={{
        emptyText: "There's nothing to do :(",
      }}
      dataSource={todos}
      renderItem={(todo) => <TodoItem todo={todo} />}
      pagination={{
        position: "bottom",
        pageSize: 10,
      }}
    />
  );
}

export default TodoList;
