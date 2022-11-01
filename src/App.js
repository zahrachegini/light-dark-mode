import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const getmode = () => {
    const initilaMode = localStorage.getItem("mode");
    if (initilaMode == null) {
      if (window.matchMedia("(prefer-color-scheme:darkMode)").matches) {
        return true;
      } else {
        return false;
      }
    } else {
      return JSON.parse(localStorage.getItem("mode"));
    }
  };
  const [darkMode, setDarkMode] = useState(getmode());

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <header>
        <div className="container">
          <div className="nav">
            <ul>
              <li>خانه</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => setDarkMode(!darkMode)}
                checked={darkMode}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="container">
          <h1>
            {darkMode
              ? "دارک مود فعال است و فضا تاریک"
              : "لایت مود فعال شده و فضا روشنه"}
          </h1>
          <p>این لایت مود است و الان صفحه سفید است.</p>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-item">
              <img src="image/1.jpg" alt="" />
              <h2>کارت اول</h2>
              <p>این کارت اول است</p>
            </div>
            <div className="card-item">
              <img src="image/2.jpg" alt="" />
              <h2>کارت دوم</h2>
              <p>این کارت دوم است</p>
            </div>
            <div className="card-item">
              <img src="image/3.jpg" alt="" />
              <h2>کارت سوم</h2>
              <p>این کارت سوم است</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
