import React,{ useState} from 'react';

function Drinks(){
  // const [score,setScore] = useState(0)
  const [plus,setPlus] = useState(0)
  const [minus,setMinus] = useState(0)

  const equal = ()=>{
    setPlus(plus + 1)
  }
  return (
    <div>
      <button onClick={equal}>+</button>
      <p>{plus}</p>
    </div>
  )
}

export default Drinks