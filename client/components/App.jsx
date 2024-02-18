import React, { useEffect, useState } from "react";

import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import "./styles/app.css";
// import Main from './Main.jsx';
// import Footer from './Footer.jsx';

const App = () => {
  // Commented out, fossil from original template code ////////////////////
  // const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   fetch("/api/tasks")
  //     .then((res) => res.json())
  //     .then((tasks) => {
  //       setTasks(tasks);
  //     });
  // }, []);
  ////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default App;
