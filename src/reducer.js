export const initialState = {
    basket: [],
    user: null,
  };
  
  export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case "REMOVE_FROM_BASKET":
        // Basket clone
        let newBasket = [...state.basket];
  
        // Checking if the item exists
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
  
        if (index >= 0) {
          // Item exists in basket, remove it
          newBasket.splice(index, 1);
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in the basket`
          );
        }
        // Return everything that the state had + the updated basket
        return { ...state, basket: newBasket };
      default:
        return state;
    }
  };
  
  export default reducer;