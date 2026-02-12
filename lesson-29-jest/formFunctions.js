export function sum(a, b) {
  if (!a || !b) {
    return 0;
  }

  return a + b;
}

export function showAmountInHrn(amount) {
  if (!amount) {
    return '';
  }
  return amount.toFixed(2) + ' грн';
}

export function validate(formData) {
  if (!formData) {
    throw new Error('AAAAAA!!! Panic!')
  }


  if (!formData.name || formData.name.length === 0) {
    return { error: 'Please enter a valid name' };
  }
}