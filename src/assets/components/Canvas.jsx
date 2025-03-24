import React from "react";
import { useDroppable } from "@dnd-kit/core";
import DraggableElement from "./DraggableElement";
import "./canvas.css";

const Canvas = ({ elements, setElements, selectElement }) => {
  const { setNodeRef } = useDroppable({ id: "canvas" });

  return (
    <div
      ref={setNodeRef}
      className="canvas"
      onClick={() => selectElement(null)} // Deselect when clicking outside
    >
      <h2 className="canvas-title">Canvas</h2>
      <div className="canvas-area">
        {elements.length > 0 ? (
          elements.map((el) => (
            <DraggableElement
              key={el.id}
              id={el.id}
              type={el.type}
              content={el.content}
              src={el.src}
              onSelect={selectElement}
            />
          ))
        ) : (
          <p className="canvas-placeholder">Drag elements here...</p>
        )}
      </div>
    </div>
  );
};

export default Canvas;
