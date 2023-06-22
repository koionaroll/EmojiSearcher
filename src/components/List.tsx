import React from "react";

function List({ list }) {
  return (
    <>
      <div>
        {list.map((el) => {
          //note to fix " unique key" bug, maybe map to index?
          return (
            <>
              <div>{el}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default List;
