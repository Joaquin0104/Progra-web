import React from "react";
import { useLocation } from "react-router-dom";
import "../../styles/SuccessfulPage.css";

const SuccessfulPage = () => {
  const location = useLocation();
  const { totalPaid } = location.state || { totalPaid: "N/A" }; 

  return (
    <div className="successful-page">
      <h1>¡Pago Exitoso!</h1>
      <p>Gracias por tu compra.</p>
      <p>
        <strong>Monto Pagado:</strong> S/.{totalPaid}
      </p>
      <button onClick={() => window.location.href = "/"}>Volver a la Tienda</button>
    </div>
  );
};

export default SuccessfulPage;
