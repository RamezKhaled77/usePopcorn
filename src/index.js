import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
// import './index.css';
// import App from './App';
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating starColor="green" onSetRating={setMovieRating} />
      <p>This movie has a rating of {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      txtColor="#000"
      starColor="red"
      size={24}
      className="star-rating"
      messages={["terrible", "bad", "ok", "good", "great"]}
      defaultRating={3}
    />
    <StarRating
      maxRating={10}
      txtColor="pink"
      starColor="blue"
      size={44}
      className="stars"
      messages={["terrible", "bad", "ok", "good", "great"]}
      defaultRating={4}
    />
    <StarRating />
    <Test />
  </React.StrictMode>
);
