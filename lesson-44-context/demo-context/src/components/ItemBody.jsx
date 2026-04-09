import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.jsx';
import LangContext from '../contexts/LangContext.jsx';


export default function ItemBody() {
  const theme = useContext(ThemeContext);
  const lang = useContext(LangContext);

  return (
    <div>
      Item body
      <button className={`remove-item ${theme}`}>
        {lang === 'en' ? 'Remove from card' : 'Видалити з корзини'}
      </button>
    </div>
  );
}