import { User } from './Components/Users'
import { MyButton } from './Components/Boton'
import { TikTakToe } from './Components/TikTakToe'

import './App.css'


const App = () =>{
  return(
    <div>
      <h1>MultiApps</h1>
      <MyButton />
      <User />
      <TikTakToe />
    </div>
  )
}


export default App
