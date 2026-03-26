import { useState } from 'react';

export function useInput(defaultValue, type) {
  const [value, setValue] = useState(defaultValue);

  return {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    },
    type: type ? type : 'text'
  }
}