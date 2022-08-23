import React from "react";

function Popup() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple popup</p>
    </div>
  );
}

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("react-target"));

root.render(<Popup />);
