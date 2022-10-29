import React from "react";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="Contacts">
      <h1>This is my contacts page</h1>
      <>
        <nav>
          <ul>
            <li>
              <Link to="socials">Socials</Link>{" "}
            </li>
            <li>
              <Link to="physical">Physical info</Link>{" "}
            </li>
          </ul>
        </nav>
      </>
    </div>
  );
}
export { Contacts };
