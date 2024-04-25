import React from "react";
import Video from "../video/Video";
import "./loading.css";
function Loading() {
  let count = [...Array(12).keys()];
  return (
    <>
      {count.map((ele) => (
        <div className="loading" key={ele}>
          <Video />
        </div>
      ))}
    </>
  );
}

export default Loading;
