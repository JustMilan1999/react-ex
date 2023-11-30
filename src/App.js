import About from "./components/About";
// import Client from "./components/Client";
// import Data from "./components/Data";
import HomePage from "./components/HomePage";
// import Report from "./components/Report";
// import Table from "./components/Table";
// import FIle from "./components/File";
import { createContext, useContext, useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Styles } from "./App.style";
import Crud from "./components/Crud";
import Crud1 from "./components/Crud1";
import UseRef from "./components/UseRef";
import UseMemo from "./components/UseMemo";
import Counter from "./components/useReducer";

function App() {
  const inputRef = useRef(null);
  const ThemeContext = createContext(null);
  const [value, setValue] = useState("vasu");
  const [bool, setBool] = useState(false);
  const [theme, setTheme] = useState("light");

  const onShow = () => {
    if (bool) {
      setValue("milan");
    }
  };

  useEffect(() => {
    setBool(true);
  }, []);

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <NavLink to={"/"}>homepage</NavLink>
            <NavLink to={"/about"}>about</NavLink>
            <NavLink to={"/crud"}>crud</NavLink>
            <NavLink to={"/crud1"}>crud1</NavLink>
            <NavLink to={"/memo"}>useMemo</NavLink>
          </div>
          <Routes>
            <Route exact path="/" element={<HomePage name={value} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/crud" element={<Crud />} />
            <Route exact path="/crud1" element={<Crud1 />} />
            <Route exact path="/memo" element={<UseMemo />} />
          </Routes>
          {/* <button onClick={onShow}>onShow</button> */}
        </BrowserRouter>
        {/* <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />
          Use dark mode
        </label>
        <p
          style={{
            background: theme === "dark" ? "black" : "white",
            color: theme === "light" ? "black" : "white",
          }}
        >
          djlfjsldfjlf
        </p> */}

        <label>firstname</label>
        <input name="firstname" id="firstname" ref={inputRef} />
        <Counter />
        <UseRef ref={inputRef} value={value} bool={bool} />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
