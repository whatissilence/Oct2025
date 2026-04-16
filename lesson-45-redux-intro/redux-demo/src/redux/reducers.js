import { ActionType } from './types.js';

const initialState = {
  count: 0,
  theme: 'light'
}

export const appReducer = (state = initialState, action) => {
  console.log('state:', state, 'action:', action);

  switch (action.type) {
    case ActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ActionType.SET_COUNT:
      return {
        ...state,
        count: action.payload,
      }
    case ActionType.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      }
    default:
      return state;
  }
}