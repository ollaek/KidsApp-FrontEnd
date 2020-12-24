import React, { useRef, useEffect } from "react";
import { character } from "../../../../helpers/resourcesMaping";

const Canvas = (props) => {
  const canvasRef = useRef(null);
  let canvas;

  const x = 20;
  const y = 50;
  let numResourcesLoaded = 0;
  const totalResources = 4;
  let images = [];
  let context;
  useEffect(
    () => {
      debugger;
      canvas = canvasRef.current;
      canvas.setAttribute("width", 250);
      canvas.setAttribute("height", 300);

      canvas.setAttribute("id", "canvas");
      context = canvas.getContext("2d");
      loadImage("shadow", character.shadow);
      loadImage("body", props.selectedCharachter.body);
      loadImage("clothes", props.selectedCharachter.clothes);
      loadImage("hair", props.selectedCharachter.hair);
      loadImage("eyes", props.selectedCharachter.eyes);
      
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      canvas = canvasRef.current;
      context = canvas.getContext("2d");
      loadImage("shadow", character.shadow);
      loadImage("body", props.selectedCharachter.body);
      loadImage("clothes", props.selectedCharachter.clothes);
      loadImage("hair", props.selectedCharachter.hair);
      loadImage("eyes", props.selectedCharachter.eyes);
      
    },
    // eslint-disable-next-line
    [props.selectedCharachter]
  );

  const loadImage = (key, src) => {
    images[key] = new Image();
    images[key].src = src;
    images[key].onload = function () {
      resourceLoaded();
    };
    images[key].onerror = function (err) {
      console.log(err);
    };
  };

  const resourceLoaded = () => {
    numResourcesLoaded += 1;
    if (numResourcesLoaded === totalResources) {
      redraw();
    }
  };
  const redraw = () => {
    // eslint-disable-next-line
    canvas.width = canvas.width;

    if (images["shadow"]) context.drawImage(images["shadow"], x, y - 50);
    if (images["body"]) context.drawImage(images["body"], x, y - 50);
    if (images["clothes"]) context.drawImage(images["clothes"], x, y - 50);
    if (images["hair"]) context.drawImage(images["hair"], x, y - 50);
    if (images["eyes"]) context.drawImage(images["eyes"], x, y - 50);
  };
  return (
    <canvas ref={canvasRef} {...props} style={{display:"block",margin:"auto"}}/>
  );
};

export default Canvas;
