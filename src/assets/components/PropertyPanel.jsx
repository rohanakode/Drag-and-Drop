import React from "react";
import "./propertypanel.css";

const PropertyPanel = ({ selectedElement, updateElement }) => {
  if (!selectedElement)
    return <div className="property-panel-placeholder">Select an element</div>;

  return (
    <div className="property-panel">
      <h2 className="property-panel-title">Properties</h2>

      {selectedElement.type === "text" && (
        <div className="property-section">
          <label className="property-label">Text Content</label>
          <input
            type="text"
            value={selectedElement.content || ""}
            onChange={(e) =>
              updateElement(selectedElement.id, { content: e.target.value })
            }
            className="property-input"
          />
        </div>
      )}
      {selectedElement.type === "paragraph" && (
        <div className="property-section">
          <label className="property-label">Type Something</label>
          <input
            type="paragraph"
            value={selectedElement.content || ""}
            onChange={(e) =>
              updateElement(selectedElement.id, { content: e.target.value })
            }
            className="property-input"
          />
        </div>
      )}

      {selectedElement.type === "image" && (
        <div className="property-section">
          <label className="property-label">Image URL</label>
          <input
            type="text"
            value={selectedElement.src || ""}
            onChange={(e) =>
              updateElement(selectedElement.id, { src: e.target.value })
            }
            className="property-input"
          />
          {selectedElement.src ? (
            <img
              src={selectedElement.src}
              alt="Preview"
              className="property-image-preview"
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/150")
              }
            />
          ) : (
            <p className="property-image-placeholder">No image URL provided.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertyPanel;
