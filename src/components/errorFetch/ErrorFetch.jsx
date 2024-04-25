import React from "react";
import "./error-fetch.css";
export default function ErrorFetch({ error }) {
  return (
    <div className="error-fetch">
      <div className="content">Error: {error}</div>
    </div>
  );
}
