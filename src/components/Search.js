import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { useResultContext } from '../context/GlobalContext'
const Search = () => {
  const [text, setText] = useState("")
  const { setSearchTerm } = useResultContext()
  const [debouncedValue] = useDebounce(text, 100);
  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])
  return (
    <div className="flex  sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input value={text}
        type='text'
        placeholder='Search Google 🔍'
        onChange={(e) => setText(e.target.value)}
        style={{ width: "800px", textAlign: "center" }}
        className=' w-90 h-10 bg-gray-800 border rounded-full  shadow-sm outline-none p-6 text-white hover:shadow-lg' />
      {text !== "" && (
        <button type='button' style={{ height: "20px", marginLeft: "-28px", marginTop: "10px", alignItems: "center", textAlign: "center", color: "white" }} onClick={() => setText('')}>❌</button>
      )}
    </div>
  )
}

export default Search
