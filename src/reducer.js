
export const initialState = {
  basket: [],
  user: null
};

// Selector
export const getBasketTotal = (basket) => 
 basket?.reduce((amount, item) => item.price + amount, 0);

 const reducer = (state, action) => {
  // const [{ basket }, dispatch] = useStateValue();
// let exist = false
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // console.log(basket)
      // if(action.item.id)
      // state.basket.map((i)=>i.id==action.item.id?exist=true:exist=false)
      // console.log(state.basket);
      // console.log(([...state.basket]).includes(action.item));
  //     if(!exist)
  // {

    return {
      ...state,
      basket: [...state.basket, action.item],
    }
  //     return{
  // ...state,
  // basket:  [...state.basket]}   
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }
    
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

export default reducer;