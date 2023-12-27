import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategoriesList,  } from "../../asyncActions/categories"
import CategoriesItem from "../CategoriesItem";
import { Link } from 'react-router-dom';
import s from './CategoriesList.module.css';

function CategoriesList({count}){

    const categories = useSelector(store => store.categories)
    const dispatch = useDispatch()
    console.log(categories)

    
    useEffect(() => {
      dispatch(fetchCategoriesList())
  }, [dispatch])


    return(
        <ul key={count} className={s.CategoriesList_bar}>
          {categories.slice(0, count).map((elem) => (
              <Link to={'/category/'+elem.id}><CategoriesItem img={elem.image} name={elem.title} id = {elem.id} count = {count}/></Link>
          ))}
        </ul>
    )

}

export default CategoriesList

