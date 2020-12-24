import React, { useState } from "react";
import { cartoon } from "../../../../helpers/resourcesMaping";
import CartoonCharacter from "./Custom-Image-Checkbox/ImageCheckbox";

const Content = (props) => {
 
  return (
    <div style={{ display: "inline-flex" }}>
      {cartoon.map((character) => {
        return (
          <CartoonCharacter
            character={character}
            selectedCartoons={props.selectedCartoons}
            setSelectedCartoons={(char) => props.setSelectedCartoons(char)}
          />
        );
      })}
    </div>
  );
};

export default Content;
