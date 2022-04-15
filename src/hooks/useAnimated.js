import { useContext } from "react"
import AnimatedContext from "../context/AnimatedProvider"
const useAnimated = () => {
  return useContext(AnimatedContext)
}

export default useAnimated