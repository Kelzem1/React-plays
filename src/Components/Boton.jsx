import { useState} from "react"





export const MyButton = () =>{
    const [pika, setPika] = useState(0)
    const handleClick = () =>{
        setPika(pika + 9)
    }
    return (
      
        <button onClick={handleClick}>
          There is {pika} Pikachus
        </button>
      )
    }