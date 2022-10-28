import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contacts } from "./pages/Contacts";
import { Home } from "./pages/Home";
import { Notfound } from "./pages/Notfound";
// import Users from "./pages/Users";
import { Socials } from "./pages/Socials";
import { Physical } from "./pages/Physical";
const UsersLazyLoad = React.lazy(() => import("./pages/Users"));

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="App-nav-li">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/users"
          element={
            <React.Suspense fallback="LOADING......">
              <UsersLazyLoad />
            </React.Suspense>
          }
        />
        <Route path="/contacts">
          <Route index element={<Contacts />} />
          <Route path="socials" element={<Socials />} />
          <Route path="physical" element={<Physical />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
