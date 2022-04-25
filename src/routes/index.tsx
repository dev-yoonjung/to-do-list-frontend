import { Routes as Switch, Route } from "react-router-dom";

// component
import TodoContainer from "containers/todo";

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<TodoContainer />} />
    </Switch>
  );
}

export default Routes;
