import React from "react";

const Content = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <hr />
      <footer>(c)ともすた</footer>
    </>
  );
};

export default Content;
