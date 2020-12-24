import React from "react";

import NavBar from "../shared/navbar/navbar";
import Footer from "../shared/footer/footer";

import Section1 from "./characterSection";
import Section2 from "./stepsSection";
import Section3 from "./comments";

const Home = ({history}) => {
  return (
    <div>
      <NavBar />
      <main>
        <Section1 history={history}/>
        <Section2 />
        <Section3 />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
