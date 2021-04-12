import React, { useState, useEffect } from "react";
import Tweet from "./Tweet";
import axios from "axios";
import "./App.css";


function App() {
  const [users, setUsers] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers({ hits: data });
    };
    fetchData();
  }, [setUsers]);

  return (
    <div className="app">
      <ul>
        {users.hits &&
          users.hits.map((item) => (
            <div>
              <Tweet
                name={item.name}
                username={item.username}
                website={item.website}
                key={item.id}
              />
            </div>
          ))}
      </ul>
    </div>
  );
}

export default App;