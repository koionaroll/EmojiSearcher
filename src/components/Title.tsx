import React, { useEffect, useState } from "react";
import axios from "axios";

function Title({ apiKey, apiUrl }) {

  //complete set of all emojis
  const [complete, setComplete] = useState([]);

  //represents a random emoji from entire set
  const [randEm, setRandEm] = useState("");

  //tracks when the title is clicked, cycle is on my default
  const [isClicked, setIsClicked] = useState(false);

  //gets whole set of emojis on page load
  useEffect(() => {
    axios
      .get(`${apiUrl}${apiKey}`) // ------------ REFACTORING HERE 
      .then((res) => {
        setComplete(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //when whole set is obtained, and if cycling is on, scrambles the whole set and updates randEm every 1 sec
  useEffect(() => {
    let timer;
    if (!isClicked) {
      timer = setInterval(() => {
        const index = Math.floor(Math.random() * complete.length);
        const value = complete[index].character;
        setRandEm(value);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [complete, isClicked]);

  return (
    <h1 onClick={()=>setIsClicked(!isClicked)}>Type to search for {randEm}</h1>
  );
}

export default Title;
