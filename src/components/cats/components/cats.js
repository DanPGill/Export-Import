import { catList } from './catlist'
export default (props) =>{
    return(
        <div>
          <h1>{props.cat == null ? "": catList[props.cat].name}</h1>
          <img src={props.cat == null ? "": catList[props.cat].image}></img>
            <div>
                <button onClick={() => props.onRandomCat(props.cats)}>Find a Cat</button>
            </div>
        </div>
        )

                          }
