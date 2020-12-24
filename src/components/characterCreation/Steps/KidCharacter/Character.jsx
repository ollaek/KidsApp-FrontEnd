import React, { useState } from "react";
import Canvas from "./canvas";
import CharachterSelector from "./CharacterSelector";

const Character = (props) => {
  

  return (
    <div>
      <Canvas selectedCharachter={props.selectedCharachter} />
      <CharachterSelector
        setSelectedCharacters={(newChar) => props.setSelectedCharacters(newChar)}
        selectedCharachter={props.selectedCharachter}
      />
    </div>
  );
};

export default Character;
