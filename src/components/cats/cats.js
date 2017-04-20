import React from 'react'
export default (props) =>{
    return(<div>
          <h1>{props.currentCat === null ? "" : props.cat[props.currentCat].name}</h1>
          <img src={props.currentCat === null ? "" : props.cat[props.currentCat].image}></img>
              <div>
                <button onClick={() => props.onRandomCat(props.cats)}>Find a Cat</button>
              </div>
              {console.log(props.cat)}
            </div>

        )


                          }
