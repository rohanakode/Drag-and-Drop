import React, { useState, useCallback } from "react";
import Sidebar from "./assets/components/Sidebar.jsx";
import Canvas from "./assets/components/Canvas.jsx";
import PropertyPanel from "./assets/components/PropertyPanel.jsx";
import "./App.css";

const App = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const addElement = useCallback(
    (type) => {
      const newElement = {
        id: Date.now(),
        type,
        content: type === "button" ? "Click Me" : "",
      };
      setElements((prev) => [...prev, newElement]);
      setIsSidebarOpen(false); 
    },
    [setElements]
  );

  const selectElement = useCallback(
    (id) => {
      setSelectedElement(id ? elements.find((el) => el.id === id) : null);
    },
    [elements]
  );

  const updateElement = useCallback(
    (id, newProps) => {
      setElements((prevElements) =>
        prevElements.map((el) => (el.id === id ? { ...el, ...newProps } : el))
      );
      if (selectedElement?.id === id) {
        setSelectedElement((prev) => ({ ...prev, ...newProps }));
      }
    },
    [selectedElement]
  );

  return (
    <div className="main-container">
      <Sidebar
        addElement={addElement}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <Canvas
        elements={elements}
        setElements={setElements}
        selectElement={selectElement}
      />
      <PropertyPanel
        selectedElement={selectedElement}
        updateElement={updateElement}
      />
      {isSidebarOpen && (
        <div className="sidebar-backdrop" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default App;
