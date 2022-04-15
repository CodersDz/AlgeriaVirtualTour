import {useState,createContext} from "react"

const AnimatedContext=createContext();


export const AnimatedProvider = ({children}) => {
  const [animated,setAnimated]=useState([])
  return (
    <AnimatedContext.Provider value={{animated,setAnimated}}>{children}</AnimatedContext.Provider>
  )
}

export default AnimatedContext