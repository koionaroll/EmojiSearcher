import React from "react";
import { v4 as uuidv4 } from "uuid";

function List({ list }) {
  return (
    <>
      {list.map((el) => {
        return (
          <>
            <div key={uuidv4()}>{el}</div>
          </>
        );
      })}
    </>
  );
}

export default List;
