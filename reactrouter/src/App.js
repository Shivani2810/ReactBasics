import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Support from "./components/Support";
import NotFound from "./components/NotFound";
import Mainheader from "./components/Mainheader";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul> */}

      <ul className="flex gap-6 justify-center mt-6">
  <li>
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-bold border-b-2 border-blue-600"
          : "text-gray-700 hover:text-blue-500"
      }
    >
      Home
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/Contact"
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-bold border-b-2 border-blue-600"
          : "text-gray-700 hover:text-blue-500"
      }
    >
      Contact
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/Support"
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-bold border-b-2 border-blue-600"
          : "text-gray-700 hover:text-blue-500"
      }
    >
      Support
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/About"
      className={({ isActive }) =>
        isActive
          ? "text-blue-600 font-bold border-b-2 border-blue-600"
          : "text-gray-700 hover:text-blue-500"
      }
    >
      About
    </NavLink>
  </li>
</ul>


      <Routes>
        <Route path="/" element={<Mainheader/>} >
        <Route index element={<Home/>}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </div>
  );
}
 
export default App;
