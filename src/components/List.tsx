import React from "react";
import { v4 as uuidv4 } from "uuid";

function List({ list }) {
  //maps through each emote of list in order of most recent
  return (
    <>
      <div style={{ display: "flex", gap: "0.5rem", flexDirection: "row-reverse",  justifyContent: "flex-end"}}>
        {list.map((el) => {
          return <img key={uuidv4()} src={el}/>
        })}
      </div>
    </>
  );
}

export default List;
