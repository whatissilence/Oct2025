import { showAmountInHrn, sum, validate } from './formFunctions.js';

describe('функція sum', () => {
  it('функція sum вертає суму', () => {
    expect(sum(100, 20)).toBe(120);
  })

  it('функція sum вертає нуль коли в неї не передали аргументи', () => {
    expect(sum()).toBe(0);
  })
})

describe('функція showAmountInHrn', () => {
  it('має повертати суму з копійками', () => {
    expect(showAmountInHrn(23)).toBe('23.00 грн');
    expect(showAmountInHrn(-50)).toBe('-50.00 грн');
  })

  it('має повертати пусту строку якщо їй не передали аргумент', () => {
    expect(showAmountInHrn()).toBe('');
  })
})

describe('Валідація форми', () => {
  it('функція валідації має повертати обʼєкт помилки, якщо імʼя пусте', () => {
    expect(validate({name: ''})).toEqual({ error: 'Please enter a valid name' })
  })

  it('функція валідації має кидати помилку, якщо вхідний обʼєкт пустий', () => {
    expect(() => { validate() }).toThrow('AAAAAA!!! Panic!')
  })
})

