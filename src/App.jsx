import { useState } from "react";
import TodoList from "./TodoList";
import FlareIcon from "@material-ui/icons/Flare";
import "./index.css";

function App() {
  const [items, setItems] = useState("");
  const [list, setList] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const inpItems = (event) => {
    setItems(event.target.value);
  };

  const inpEvent = () => {
    setList((olditems) => {
      return [...olditems, items];
    });
    setItems("");
  };

  const delItem = (id) => {
    setList((olditems) => {
      return olditems.filter((currElem, index) => {
        return index !== id;
      });
    });
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : "bright-theme"}>
      
      <div className="main-div">
        <div className="center-div">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isDarkTheme}My Todo List
      </button>
          
          <input
            type="text"
            placeholder="Enter a Todo"
            value={items}
            onChange={inpItems}
          />
          <button onClick={inpEvent}>+</button>
          <ol>
            {list.map((item, index) => {
              return (
                <TodoList
                  text={item}
                  key={index}
                  id={index}
                  onSelect={delItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
