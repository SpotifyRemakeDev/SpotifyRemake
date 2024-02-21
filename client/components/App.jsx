import React, { useEffect, useState } from "react";

import Header from './header/Header.jsx';
import Main from './Library/Main.jsx';
// import Carousel from './Carousel.jsx';
import Footer from './footer/Footer.jsx';

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
      <Main />
      {/* <Carousel /> */}
      <Footer />
    </>
  );
};

export default App;
