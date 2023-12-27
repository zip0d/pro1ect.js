import { useEffect } from "react";



const defaultState = 1



 const INCREMENT_COUNT = 'INCREMENT_COUNT';
 const DECREMENT_COUNT = 'DECREMENT_COUNT';


 
export const countReducer = (state = defaultState, action) =>{

    switch (action.type){
        case INCREMENT_COUNT:
            return (
              state < 25 ? state + 1 : state
            );  
      
        case DECREMENT_COUNT:
            return (
            state > 1 ? state - 1 : state
            )
      
          default:
            return state;
    
}
}

export const incrementCount = () => ({
    type: INCREMENT_COUNT,
  });
  
export const decrementCount = () => ({
    type: DECREMENT_COUNT,
  });
  
