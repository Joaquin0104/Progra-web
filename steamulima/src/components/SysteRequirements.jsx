import React from "react";
import "../styles/SystemRequirements.css";

const SystemRequirements = ({ requirements }) => {
  if (!requirements) {
    return <p>No hay información de requisitos disponible.</p>;
  }

  return (
    <div className="system-requirements-container">
      <h2>REQUISITOS DEL SISTEMA</h2>
      <div className="requirements-grid">
        <div className="requirements-column">
          <h3>MÍNIMO:</h3>
          <div
            className="requirements-content"
            dangerouslySetInnerHTML={{ __html: requirements.minimum }}
          />
        </div>
        <div className="requirements-column">
          <h3>RECOMENDADO:</h3>
          <div
            className="requirements-content"
            dangerouslySetInnerHTML={{ __html: requirements.recommended }}
          />
        </div>
      </div>
    </div>
  );
};

export default SystemRequirements;
