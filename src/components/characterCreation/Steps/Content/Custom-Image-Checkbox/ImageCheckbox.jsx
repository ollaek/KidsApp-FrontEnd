import React, { useRef } from "react";
import CheckIcon from "@material-ui/icons/Check";

import "./styles.css";

const ImageCheckbox = (props) => {
  const characterRef = useRef(null);

  const selectImage = () => {
    if (props.selectedCartoons.includes(props.character.name)) {
      characterRef.current.style.opacity = "0";
      props.setSelectedCartoons(
        props.selectedCartoons.filter((item) => item !== props.character.name)
      );
    } else {
      characterRef.current.style.opacity = "0.5";
      props.setSelectedCartoons([
        ...props.selectedCartoons,
        props.character.name,
      ]);
    }
  };
  return (
    <div className="containerhamada" onClick={() => selectImage()}>
      <img
        src={props.character.src}
        alt={props.character.name}
        className="image"
      />
      <div ref={characterRef} className="overlay">
        <a href="#" className="icon" title="cartoonCharacter">
          <CheckIcon style={{ fontSize: 40 }} />
        </a>
      </div>
    </div>
  );
};

export default ImageCheckbox;
