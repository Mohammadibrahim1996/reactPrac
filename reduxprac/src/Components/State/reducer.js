export const myReducer = (
  state = { product: [], cart: [], selected: [] },
  action
) => {
  if (action.type === "ADD-PRODUCT") {
    return { ...state, product: [...action.data, ...state.product] };
  }
  if (action.type === "SELECTED-PRODUCT") {
    return { ...state, selected: [action.data] };
  }
  if (action.type === "ADD-CART") {
    return { ...state, cart: [{...action.data , key: state.cart.length}, ...state.cart] };
  }
  if (action.type === "REMOVE-PRODUCT") {
    const filtered = state.cart.filter((elem) => elem.key !== action.data.key);
    return { ...state, cart: filtered };
  }
  return state;
};
