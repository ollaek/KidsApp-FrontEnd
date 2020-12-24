import React from "react";
import NavBar from "../shared/navbar/navbar";
import Footer from "../shared/footer/footer";
import Stepper from "./Stepper/Stepper";

const index = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Stepper />
      </main>

      <Footer />
    </div>
  );
};

export default index;
