import { ActionType } from './types.js';

export const increment = () => ({ type: ActionType.INCREMENT });
export const decrement = () => ({ type: ActionType.DECREMENT });
export const setCount = (newCountValue) => ({ type: ActionType.SET_COUNT, payload: newCountValue });
export const toggleTheme = () => ({ type: ActionType.TOGGLE_THEME});