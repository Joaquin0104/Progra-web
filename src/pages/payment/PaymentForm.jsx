import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../assets/contexts/CartContext";
import "../../styles/PaymentForm.css";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    paymentMethod: "Visa",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    firstName: "",
    lastName: "",
    city: "",
    zip: "",
    address1: "",
    address2: "",
    country: "Perú",
    phone: "",
    savePaymentInfo: false,
  });
  const { total } = useCart();

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de Pago:", formData);
    navigate("/successful", { state: { totalPaid: total.toFixed(2) } }); 
  }

  return (
    <div className="payment-form-container">
      <h2>MÉTODO DE PAGO</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="paymentMethod">Selecciona un método de pago</label>
          <select
            name="paymentMethod"
            id="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="cardNumber">Número de tarjeta</label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Fecha de caducidad</label>
            <div className="expiry-group">
              <input
                type="text"
                name="expiryMonth"
                placeholder="MM"
                value={formData.expiryMonth}
                onChange={handleChange}
                maxLength="2"
                required
              />
              <input
                type="text"
                name="expiryYear"
                placeholder="AA"
                value={formData.expiryYear}
                onChange={handleChange}
                maxLength="2"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="cvv">Código de seguridad</label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              value={formData.cvv}
              onChange={handleChange}
              maxLength="4"
              required
            />
          </div>
        </div>

        <h2>INFORMACIÓN DE FACTURACIÓN</h2>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="firstName">Nombre</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellidos</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="city">Localidad</label>
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Código postal</label>
            <input
              type="text"
              name="zip"
              id="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address1">Dirección de facturación</label>
          <input
            type="text"
            name="address1"
            id="address1"
            value={formData.address1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address2">
            Dirección de facturación (segunda línea)
          </label>
          <input
            type="text"
            name="address2"
            id="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="country">País</label>
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="Perú">Perú</option>
              <option value="Argentina">Argentina</option>
              <option value="Chile">Chile</option>
              <option value="Colombia">Colombia</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="savePaymentInfo"
              checked={formData.savePaymentInfo}
              onChange={handleChange}
            />
            Guardar mi información de pago para facilitar el proceso de pago la
            próxima vez
          </label>
        </div>
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Continuar
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
