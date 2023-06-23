import React from "react";
import { useState } from "react";
import List from "./List";
import axios from "axios";

function Search({ apiUrl }) {
  //value of emoji searched by user
  const [value, setValue] = useState("");

  //list of emojis previously searched by user
  const [list, setList] = useState([]);

  //user input validation
  const [showErr, setShowErr] = useState(false);

  //tracking change in input on the input field
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // on submit, make get request to fetch data given emote name and save it to "list", iterating on said list with each new entry
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`${apiUrl}${value}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setShowErr(false);
          setList((prev) => {
            return [...prev, res.data];
          });
        } else {
          // Handle the case when res.data is null or empty
          setShowErr(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // Empties input field on each submission
    setValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          style={{width:"20rem"}}
          onChange={handleChange}
          value={value}
          placeholder="Search Emote Here, Press Enter to Submit"
          //pressing "enter" submits form
          onKeyDown={(e) => {
            e.key === "Enter" ? handleSubmit : null;
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {showErr ? "invalid entry" : null }
      <List list={list} />
    </>
  );
}

export default Search;
