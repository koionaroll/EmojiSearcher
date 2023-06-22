import React, { useEffect, useState } from "react";
import axios from "axios";

function Title({ apiKey, apiUrl }) {
  const [complete, setComplete] = useState([]);
  const [randEm, setRandEm] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    axios
      .get(`${apiUrl}${apiKey}`)
      .then((res) => {
        setComplete(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
