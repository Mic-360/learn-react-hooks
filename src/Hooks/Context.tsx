import { FC } from 'react'
import ContextProvider from './context/ContextProvider'
import FunctionContext from './context/FunctionContext'

const Context: FC = () => {
  return (
    <ContextProvider>
      <FunctionContext />
    </ContextProvider>
  )
}
export default Context
