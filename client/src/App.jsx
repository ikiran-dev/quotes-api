import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState("");
  async function getdata(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    setQuote(data);
    setLoading(false);
  }
  useEffect(() => {
    getdata("http://localhost:3000/");
  }, []);
  return (
    <div className="ll">
      <center>
        <h1 className="heading">Quote Of The Day</h1>
        {loading ? (
          <h1 className="loading">Loading</h1>
        ) : (
          <h1 className="quote">{quote}</h1>
        )}
      </center>
    </div>
  );
}

export default App;
