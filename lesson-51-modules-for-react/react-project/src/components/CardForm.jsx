import { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

export default function CardForm() {
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focused: '',
  });

  // Універсальний обробник змін
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Обробник фокусу
  const handleInputFocus = (e) => {
    setCardData((prev) => ({
      ...prev,
      focused: e.target.name,
    }));
  };


  return (
    <div className="credit-card-form">
      <h2>Введіть дані платіжної картки:</h2>

      {/* Компонент Cards для відображення кредитної картки */}
      <Cards
        number={cardData.number}
        name={cardData.name}
        expiry={cardData.expiry}
        cvc={cardData.cvc}
        focused={cardData.focused}
      />

      <form className="form">
        <div className="form-group">
          <input
            type="tel"
            name="number"
            placeholder="Номер картки"
            value={cardData.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            maxLength="16"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Ім'я на картці"
            value={cardData.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="expiry"
            placeholder="Термін дії (MM/YY)"
            value={cardData.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            maxLength="5"
            required
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cardData.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            maxLength="3"
            required
          />
        </div>
      </form>
    </div>

  )
}