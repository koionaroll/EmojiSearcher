import React from "react";
import { v4 as uuidv4 } from "uuid";

function List({ list }) {
  return (
    <>
      <div style={{ display: "flex", gap: "0.5rem", flexDirection: "row-reverse",  justifyContent: "flex-end"}}>
        {list.map((el) => {
          return (
            <>
              <div key={uuidv4()}>{el}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default List;
