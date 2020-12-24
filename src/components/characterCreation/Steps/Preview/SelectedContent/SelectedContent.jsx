import React from "react";
import { cartoon } from "../../../../../helpers/resourcesMaping";
import "../../Content/Custom-Image-Checkbox/styles.css";

const SelectedContent = (props) => {

    const selected = cartoon.filter(cartoon => props.selectedCartoons.includes(cartoon.name) );
 
  return (
    <div style={{ display: "inline-flex" }}>
    {selected.map((character) => {
      return (
        <div className="containerhamada" >
        <img
          src={character.src}
          alt={character.name}
          className="image"
          style={{backgroundColor: "gray"}}
        />
      </div>
      );
    })}
  </div>
    
  );
};

export default SelectedContent;
