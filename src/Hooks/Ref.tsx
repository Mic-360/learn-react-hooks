import { FC, useRef, useState } from 'react'
import '../App.css'

const Ref: FC = () => {
  const [name, setName] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  function focus() {
    // @ts-ignore
    inputRef.current.focus()
  }
  return (
    <div id='Ref'>
      <h1>useRef</h1>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>This is a {name} Hook</div>
      <button onClick={focus}>FocusInput</button>
    </div>
  )
}
export default Ref
