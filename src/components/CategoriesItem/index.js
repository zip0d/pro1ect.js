import s from './CategoriesItem.module.css';

function CategoriesItem({img, name, id, count}){

    console.log(count)
    let CardWidth = ''
    if (count === 4){
        CardWidth = '316px'
    }else{
        CardWidth = '248px'
    }

    return(

            <li key={id} style = {{width: `${CardWidth}`}}className={s.CategoriesItem_card}>
              <div
                style={{
                  background: `url(http://localhost:3333${img}) no-repeat center center / cover`,
                  height: '350px',
                  alignSelf: 'stretch',
                  borderRadius: 12
                }} 
              ></div>
              <p className={s.CategoriesItem_Name}>{name}</p>
            </li>
    )

}

export default CategoriesItem