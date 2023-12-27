

import { getAllCategoriesAction } from "../store/categoriesReducer"
import { BASE_URL } from "..";
 
export function fetchCategoriesList(){
  return function(dispatch) {
    fetch(`${BASE_URL}/categories/all`)
      .then(res => res.json())
      .then(data => dispatch(getAllCategoriesAction(data)));
  }
}