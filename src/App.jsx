import React from 'react'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,multiply,divide} from './Counter/counterSlice'
const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className=' h-[100vh] w-[100vw] bg-zinc-800 overflow-hidden flex justify-center items-center text-white'>
        <button 
          onClick={() => dispatch(decrement())}
        className='border px-[3vw] py-[1vh] rounded '>-</button>
       <div className='w-[400px] h-[400px] flex flex-col items-center justify-center gap-[50px] '>
        <button 
        onClick={() => dispatch(multiply())}
        className='border px-[3vw] py-[1vh] rounded '>*</button>
        <p><b>{count}</b></p>
        <button
        onClick={() => dispatch(divide())}
        className='border px-[3vw] py-[1vh] rounded '>/</button>
       </div>
       <button
         onClick={() => dispatch(increment())}
       className='border px-[3vw] py-[1vh] rounded '>+</button>
    </div>
  )
}

export default App
