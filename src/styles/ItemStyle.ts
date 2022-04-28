import { List } from "antd";

import styled from "styled-components";

const ItemStyle = styled(List.Item)`
  .list-item {
    display: flex;
    justify-content: space-between;

    .todo-item {
      display: flex;
      align-items: center;

      .todo-tag {
        margin: 10px;
        white-space: normal !important;
        max-width: 115px;
        word-break: break-all;
      }
    }

    @media ~'only screen and (min-width: 768px) and (max-width: 992px - 1) ' {
      .todo-item {
        .todo-tag {
          max-width: 500px;
        }
      }
    }

    @media ~'only screen and (min-width: 992px) ' {
      .todo-item {
        .todo-tag {
          max-width: 100%;
        }
      }
    }
  }
`;

export default ItemStyle;
