import { createStore } from 'redux';

const initialState = {
  quote: '',
  author: '',
};

function quoteReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_QUOTE':
      return {
        ...state,
        quote: action.payload.quote,
        author: action.payload.author,
      };
    default:
      return state;
  }
}

const store = createStore(quoteReducer);
export default store;
