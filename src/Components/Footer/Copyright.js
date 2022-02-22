import React from "react";

function Copyright() {
  const yearNow = new Date().getFullYear();
  return (
    <div className="copyright">
      <p>My Little Garden &copy; {yearNow}</p>
    </div>
  );
}

export default Copyright;
