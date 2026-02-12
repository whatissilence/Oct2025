
export function calculatePrice(priceParam, promoCode = '') {
  const TAXES_PERCENT = 5;
  const PROMOS = {
    VALENTINE_10: 10,
    BIRTHDAY_20: 20
  }

  const DELIVERY_PRICE = 20;
  let price = priceParam;

  if (!price || price < 0) {
    return '0 грн'
  }

  if(promoCode && PROMOS[promoCode]) {
    price = price - (price * PROMOS[promoCode] / 100);
  }

  price = price + (price * TAXES_PERCENT / 100);

  if(price < 100) {
    price = price + DELIVERY_PRICE;
  }

  return price.toFixed(2) + ' грн';
}