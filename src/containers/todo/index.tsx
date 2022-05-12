import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITodo } from "store/todo/models/todo.model";
import { RootState } from "store/todo/reducers";
import { getTodoList } from "store/todo/actions";

import { Col, Card, PageHeader } from "antd";
import AddTodoForm from "components/AddTodoForm";
import TodoList from "components/TodoList";

import TodoStyle from "styles/TodoStyle";

function TodoContainer() {
  const dispatch = useDispatch();
  const todos: ITodo[] | undefined = useSelector(
    (state: RootState) => state.todo
  )?.todos;

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <TodoStyle
      justify="center"
      align="middle"
      gutter={[0, 20]}
      className="todos-container"
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <PageHeader
          title="Add Todo"
          subTitle="To add a todo, just fill the form below and click in add todo."
        />
      </Col>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Create a new todo">
          <AddTodoForm />
        </Card>
      </Col>
      <Col
        xs={{ span: 23 }}
        sm={{ span: 23 }}
        md={{ span: 21 }}
        lg={{ span: 20 }}
        xl={{ span: 18 }}
      >
        <Card title="Todo List">
          <TodoList />
        </Card>
      </Col>
    </TodoStyle>
  );
}

export default TodoContainer;
