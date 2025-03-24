import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { Resizable } from "react-resizable";
import "react-resizable/css/styles.css"; 
import "./draggableElement.css";

const DraggableElement = ({
  id,
  type,
  content,
  src,
  onSelect,
  width = 200,
  height = 200,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const [size, setSize] = useState({ width, height });

  const handleResize = (event, { size }) => {
    setSize(size);
  };

  const style = {
    transform: `translate(${transform?.x || 0}px, ${transform?.y || 0}px)`,
  };

  const handleClick = (e) => {
    e.stopPropagation(); 
    onSelect(id); 
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="draggable-element"
      onClick={handleClick}
      style={style}
    >
      {type === "text" && (
        <p className="draggable-text">{content || "My world"}</p>
      )}
      {type === "paragraph" && (
        <p className="draggable-text">{content || "This is my assignment."}</p>
      )}
      {type === "image" && (
        <Resizable
          width={size.width}
          height={size.height}
          onResize={handleResize}
          minConstraints={[100, 100]} // Minimum width and height (100px x 100px)
          maxConstraints={[500, 500]} // Maximum width and height (500px x 500px)
        >
          <div
            className="image-container"
            style={{ width: size.width, height: size.height }}
          >
            <img
              src="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
              alt="Placeholder"
              className="draggable-image"
              style={{ width: "100%", height: "100%" }} 
            />
          </div>
        </Resizable>
      )}
      
    </div>
  );
};

export default DraggableElement;
